import { Injectable } from '@angular/core';

import debug from 'debug';
import { environment as Env } from 'src/environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Response } from '../models/response';

const log = debug('apiService');

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetRequest(apiInfo: ApiInfo, params?: TopHeadlinesParams | SourcesParams) {
    log('request: ', params);
    if (!params) {
      params = Env.api.defaultParams;
    }
    let queryUrl = Env.api.name + apiInfo.name;
    log("request with params:", params);
    let queryParams = new HttpParams();
    apiInfo.params.forEach(paramName => {
      const paramValue = params[paramName] || Env.api.defaultQuery[paramName] || '';
      if (paramValue) {
        queryParams = queryParams.append(paramName, paramValue);
      }
    });
    log('query: ', queryParams);

    return this.http.get<Response>(queryUrl, { params: queryParams });
  }

}


export interface ApiInfo{
  name: string;
  params: string[];
  defaultParams: TopHeadlinesParams | SourcesParams;
}

export interface Params{
  apiKey?: string;
  page?: number;
  pageSize?: number;
}

export interface TopHeadlinesParams extends Params {
  q?: string;
  sources?: string;
  category?: string;
  country?: string;
}

export interface SourcesParams extends Params {
  country?: string;
  language?: string;
  category?: string;
}
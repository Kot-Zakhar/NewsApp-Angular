import { Source } from '../models/source';
import { SourceResponse } from '../models/source-response';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

import debug from 'debug';
const log = debug('app-sourceService');

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  dataUrl = env.api.name + env.api.sources.name;
  currentSources: Source[];
  queryParams = new HttpParams().set('apiKey', env.api.defaultQuery.apiKey);
  
  constructor(private http: HttpClient) { }

  GetServices() {
    log(this.queryParams);
    return this.http.get<SourceResponse>(this.dataUrl, {params: this.queryParams});
  }
}

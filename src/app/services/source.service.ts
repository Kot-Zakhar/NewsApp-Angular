import { Source } from '../models/source';
import { SourceResponse } from '../models/source-response';

import { Injectable } from '@angular/core';

import { environment as Env } from '../../environments/environment';

import debug from 'debug';
import { ApiService } from './api.service';
const log = debug('app-sourceService');

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  currentSources: Source[];
  
  constructor(private api: ApiService) { }

  GetServices(callback: (data: Source[], error: Error) => void) {
    this.api.GetRequest(Env.api.sources).subscribe(value => {
      const res = new SourceResponse(value);
      this.currentSources = res.sources;

      if (res.status === Env.api.okStatus){
        callback(res.sources, null);
      } else {
        callback(null, new Error(res.error.message));
      }
    },
    error => callback(null, new Error(error)))
  }
}

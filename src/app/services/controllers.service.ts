import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TopHeadlinesParams } from 'src/app/services/api.service';
import debug from 'debug';

const log = debug('app-controllersService');

@Injectable({
  providedIn: 'root'
})
export class ControllersService {

  private paramsSource = new BehaviorSubject<TopHeadlinesParams>(undefined);

  currentParams = this.paramsSource.asObservable();

  constructor() { }

  SetParams(params: TopHeadlinesParams) {
    log("setting the params to:", params)
    this.paramsSource.next(params);
  }

}

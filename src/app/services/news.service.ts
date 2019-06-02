import { Injectable } from '@angular/core';

import { environment as Env } from '../../environments/environment';

import { NewsResponse } from '../models/news-response';
import { Params } from '../services/api.service';
import { PieceOfNews } from '../models/piece-of-news';

import debug from 'debug';
import { ApiService } from './api.service';
const log = debug('app-newsService');

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentNews: PieceOfNews[];

  lastParams: Params;
  newsAvailable = 0;
  pagesLoaded = 0;
  pageSize = Env.api.defaultQuery.pageSize;

  constructor(private api: ApiService) { }

  GetPieceOfNews(pieceOfNewsId: string) {

  }

  GetTopHeadlines(callback: (data: PieceOfNews[], error: Error) => void, params?: any){
    log('top headlines: ', params);

    if (!params){
      params = Env.api.defaultParams;
    }

    this.api.GetRequest(Env.api.topHeadlines, params).subscribe(
      value => {
        const res = new NewsResponse(value);
        this.newsAvailable = res.totalResults;
        this.currentNews = res.articles;

        if (res.status === Env.api.okStatus){
          this.lastParams = params;
          this.pagesLoaded = 1;
          if (params && params.pageSize){
            this.pageSize = params.pageSize;
          }
          callback(res.articles, null);
        } else {
          this.lastParams = undefined;
          this.pagesLoaded = 0;
          callback(null, new Error(res.error.message));
        }
      },
      error => callback(null, new Error(error))
    );
  }

  LoadMore(callback: (data: PieceOfNews[], error: Error) => void) {
    log('load more: ', this.lastParams);

    if (Env.maxNewsAllowed <= this.pagesLoaded * this.pageSize) {
      callback(null, new Error(Env.alerts.noNewsAvailable));
      return;
    }
    if (this.newsAvailable <= this.pagesLoaded * this.pageSize) {
      callback(null, new Error(Env.alerts.noMewsLeft));
      return;
    }

    if (this.lastParams){
      this.lastParams.page = this.pagesLoaded + 1;
    } else {
      this.lastParams = { page: this.pagesLoaded + 1 };
    }

    this.api.GetRequest(Env.api.topHeadlines, this.lastParams).subscribe(
      value => {
        const res = new NewsResponse(value);
        this.currentNews = this.currentNews.concat(res.articles);
        if (res.status === Env.api.okStatus){
          this.pagesLoaded = this.lastParams.page;
          callback(res.articles, null);
        } else {
          callback(null, new Error(res.error.message));
        }
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { PieceOfNews } from 'src/app/models/piece-of-news';
import { Source } from 'src/app/models/source';
import { NewsResponse } from 'src/app/models/news-response';
import debug from 'debug';
import { TopHeadlinesParams } from 'src/app/services/api.service';
import { environment as Env } from 'src/environments/environment';
import { ControllersService } from 'src/app/services/controllers.service';

const log = debug('app-newsComponent');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: PieceOfNews[];
  error: Error;
  errorEnabled = false;

  currentParams: TopHeadlinesParams = {};

  constructor(private newsService: NewsService, private controllerService: ControllersService) { }

  ngOnInit() {
    this.controllerService.currentParams.subscribe((params) => {
      log("got new params. Reloading with params:", this.currentParams);
      this.currentParams = params;
      this.LoadNews(this.currentParams);
    })
    // this.LoadNews();
  }

  TriggerError(message?: string){
    if (message) {
      this.error = new Error(message);
    }
    this.errorEnabled = true;
    setTimeout(() => {
      this.errorEnabled = false;
    }, Env.alerts.timeout);
  }

  LoadNews(params?: TopHeadlinesParams){
    log('loading news with params ', params);
    this.newsService.GetTopHeadlines((news: PieceOfNews[], error: Error) => {
      if (news && news.length) {
        this.news = news;
      } else {
        if (error) {
          this.error = error;
        } else {
          this.error = new Error(Env.alerts.noNews);
        }
        this.TriggerError();
      }
      log("Loaded news ", news, " with errors: ", error);
    }, params);
  }

  LoadMore() {
    this.newsService.LoadMore((news: PieceOfNews[], error: Error) => {
      if (news && news.length) {
        this.news = this.news.concat(news);
      } else {
        if (error){
          this.error = error;
        } else {
          this.error = new Error(Env.alerts.noMewsLeft);
        }
        this.TriggerError();
      }
      log("Loaded extra news ", news, " with errors: ", error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { PieceOfNews } from 'src/app/models/piece-of-news';
import { NewsResponse } from 'src/app/models/news-response';
import debug from 'debug';

const log = debug('app-newsComponent');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: PieceOfNews[];
  error: Error;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.LoadNews();
  }

  LoadNews(){
    log('loading news');
    this.newsService.GetTopHeadlines((news: PieceOfNews[], error: Error) => {
      this.news = news;
      this.error = error;
    });
  }

  LoadMore() {
    this.newsService.LoadMore((news: PieceOfNews[], error: Error) => {
      this.news = this.news.concat(news);
      this.error = error;
    });
  }

}

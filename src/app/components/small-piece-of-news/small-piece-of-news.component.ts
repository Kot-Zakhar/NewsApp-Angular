import { Component, OnInit, Input } from '@angular/core';
import { PieceOfNews } from 'src/app/models/piece-of-news';
import { environment as Env } from 'src/environments/environment';

import debug from 'debug';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-small-piece-of-news',
  templateUrl: './small-piece-of-news.component.html',
  styleUrls: ['./small-piece-of-news.component.css']
})
export class SmallPieceOfNewsComponent implements OnInit {
  log;
  path;
  @Input() news: PieceOfNews;
  constructor() { }

  ngOnInit() {
    this.log = debug('smallPieceOfNews ' + this.news.id);
    this.log("Piece created");
    this.path = Env.paths.news + '/' + this.news.id;
  }

}

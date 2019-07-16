import { Component, OnInit, Input } from '@angular/core';
import { PieceOfNews } from 'src/app/models/piece-of-news';
import { environment as Env } from 'src/environments/environment';

import debug from 'debug';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-piece-of-news',
  templateUrl: './piece-of-news.component.html',
  styleUrls: ['./piece-of-news.component.css']
})
/* TODO:
  fix a bug with random not opening windows
*/
export class PieceOfNewsComponent implements OnInit {
  log;
  path;

  animal: string;
  name: string;

  @Input() news: PieceOfNews;
  constructor() { }

  ngOnInit() {
    this.log = debug('app-smallPieceOfNews ' + this.news.id);
    this.log("Piece created");
    this.path = Env.paths.news + '/' + this.news.id;
  }

}

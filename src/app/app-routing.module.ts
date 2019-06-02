import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as env } from '../environments/environment';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';
import { BigPieceOfNewsComponent } from './components/big-piece-of-news/big-piece-of-news.component';


const routes: Routes = [
  { path: '', redirectTo: env.paths.home, pathMatch: 'full' },
  { path: env.paths.home, component: NewsComponent },
  { path: env.paths.pieceOfNews, component: BigPieceOfNewsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

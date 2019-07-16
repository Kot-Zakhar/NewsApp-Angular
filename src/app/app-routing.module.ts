import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as env } from '../environments/environment';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: env.paths.home, component: NewsComponent },
  { path: '', redirectTo: env.paths.home, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewsComponent } from './components/news/news.component';
import { PieceOfNewsComponent } from './components/piece-of-news/piece-of-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { SourcesComponent } from './components/sources/sources.component';
import { SourceComponent } from './components/source/source.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    PieceOfNewsComponent,
    FooterComponent,
    SourcesComponent,
    SourceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { SourcesComponent } from './components/sources/sources.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BigPieceOfNewsComponent } from './components/big-piece-of-news/big-piece-of-news.component';
import { SmallPieceOfNewsComponent } from './components/small-piece-of-news/small-piece-of-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    FooterComponent,
    SourcesComponent,
    NotFoundComponent,
    BigPieceOfNewsComponent,
    SmallPieceOfNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

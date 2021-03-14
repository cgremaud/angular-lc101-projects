import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    LinksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

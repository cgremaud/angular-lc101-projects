import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresComponent } from './chores/chores.component';
import { PetsListComponent } from './pets-list/pets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresComponent,
    PetsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

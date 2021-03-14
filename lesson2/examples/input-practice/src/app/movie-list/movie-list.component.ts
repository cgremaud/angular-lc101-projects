import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   brands = [
      {
         name: "microsoft", 
         url: "https://www.microsoft.com"
      },
      {
         name: "google",
         url: "https://google.com"
      }
   ]

   constructor() { }
 

   ngOnInit() {
   }

     
   addMovie (newTitle: string) {
      if (newTitle === "" || this.movies.includes (newTitle)){
         alert("Please enter a unique title")
      } else {
      this.movies.push(newTitle)
      }
   }
}
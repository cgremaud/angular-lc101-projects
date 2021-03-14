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
         name: "Gucci", 
         url: "https://www.gucci.com/us/en/"
      },
      {
         name: "Nestle",
         url: "https://nestle.com"
      }
   ]

   constructor() { }
 

   ngOnInit() {
   }

     
   addMovie (newTitle: string) {
      this.movies.push(newTitle)
   }

   addBrand(brandName: string, brandURL: string){
      if (brandURL === "" || !brandURL.includes("http")) {
         alert("Must include valid URL")
      } else {
         this.brands.push({
         name: brandName,
         url: brandURL
         })
      }
   }
}
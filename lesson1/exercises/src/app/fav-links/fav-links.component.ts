import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    {
    url: "https://www.google.com",
    name: "google"
   },
   {
     url: "https://facebook.com",
    name: "facebook"
   }, 
   {
     url: "https://soundcloud.com/colyngremaud",
    name: "soundcloud"
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}

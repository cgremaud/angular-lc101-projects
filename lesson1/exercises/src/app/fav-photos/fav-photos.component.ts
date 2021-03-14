import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures of my Soul';
  images = [
    {
      url: "https://bit.ly/3th0iEJ",
      alt: "Bullseye image"
    },
    {
      url: "https://bit.ly/3vvT7KW",
      alt: "Bisexual dread in black metal font"
    },
    {
      url: "https://bit.ly/3voaMDY",
      alt: "Michelangelo's creation of adam from the sistine chapel"
    }
  ];
  // image1 = 'https://bit.ly/3th0iEJ';
  // image2 = 'https://bit.ly/3vvT7KW';
  // image3 = 'https://bit.ly/3voaMDY';

  constructor() { }

  ngOnInit() {
  }

}
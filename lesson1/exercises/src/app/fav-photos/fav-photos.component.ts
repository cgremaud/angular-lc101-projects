import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures of my Butthole';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/157760805_10102108290815462_6995875312480781037_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=FgmVWVhDeIIAX8q6FMk&_nc_ht=scontent-ort2-1.xx&oh=26e5dbd3cc8f47ae6e52f1528d5c2997&oe=606FF70C';
  image3 = 'https://images.theconversation.com/files/302610/original/file-20191120-502-1li9z2y.jpg?ixlib=rb-1.1.0&rect=89%2C0%2C3196%2C1598&q=45&auto=format&w=1356&h=668&fit=crop';

  constructor() { }

  ngOnInit() {
  }

}
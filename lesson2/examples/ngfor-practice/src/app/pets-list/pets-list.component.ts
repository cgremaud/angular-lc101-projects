import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets = ['dog', 'cat', 'fish']

  constructor() { }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
  chores = ['Do the dishes', 'Walk the dog', 'Dig a fresh grave', 'Break into government']
  constructor() { }

  ngOnInit() {
  }

}

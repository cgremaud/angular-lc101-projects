import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Elaborate on that', 'Initiate a fight', 'break knees', 'type letter on human skin', 'dribble urine on spaghetti', 'work harder'];
   finishedChores = ['sprained ankles', 'popped wheelies', 'ate shit', 'killed god'];

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}

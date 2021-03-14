import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ['Empty dishwasher', 'bark dogs', 'spay nutes']},
      {title: "Today's Chores", tasks: ['Wallow in filth', 'Elate the lord', 'Spray defensive chemicals']},
      {title: "Tomorrow's Chores", tasks: ['Allay fears', 'boil sinners in oil', 'praise jeebus']}
   ]
   
   
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}

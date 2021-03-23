import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'white';
   underlineOn: string = "underline"
   italicsOn: string = "italic"
   bulletType: string = 'A';
   changeColor: boolean = true;
   addOtherList: boolean = true;
   otherList: string[] = ['Boobs', 'cats', 'smiles']
   listA: string[] = ['hallelujah', 'alabama', 'jesus', 'electric eels']

   constructor() { }

   ngOnInit() { }

}



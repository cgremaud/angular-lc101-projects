import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {
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

  addBrand(brandName: string, brandURL: string){
    if (brandName === ""){
       alert("Must include link name")
    }
    else if(brandURL === "" || !brandURL.includes("http")) {
       alert("Must include valid URL")
    } else {
       this.brands.push({
       name: brandName,
       url: brandURL
       })
    }
 }

}

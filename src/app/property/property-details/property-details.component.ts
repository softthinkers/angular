import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
//import { stringify } from 'querystring';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public propertyId!: number;
  constructor(private Route: ActivatedRoute ,private router :Router) { }

  ngOnInit() {
    this.propertyId= +(this.Route.snapshot.params['pid']);
    this.Route.params.subscribe((params)=>{
       this.propertyId=+params['pid']
    }
      )
    
  }
 onSelectNext(){
   this.propertyId +=1;
   this.router.navigate(['property-details',this.propertyId])
 }
  

}

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule, Routes } from '@angular/router';
import{HttpClientModule}from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
const appRoutes :Routes=[
   {path:'rent-property', component: PropertyListComponent},
   {path:'add-property', component: AddPropertyComponent},
   {path:'property-detail/:pid',component:PropertyDetailsComponent}
   ,{path:'**', component: PropertyListComponent}

  ]
@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

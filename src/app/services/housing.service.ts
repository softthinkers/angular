import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/iProperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) {}
  getAllProperties(SellRent:number):Observable<IProperty[]>{
   //change line this.http.get('assets/Data/Properties.json') to this.http.get<any>('assets/Data/Properties.json')
    return this.http.get<any>('data/properties.json')
     .pipe(
       map(data=>{
        // return data;
         console.log(data);
         const propertiesArray:Array<IProperty>=[];
          for(const id in data){
       if(data.hasOwnProperty(id)&& data[id].SellRent===SellRent)
          {
            propertiesArray.push(data[id]);
          }
      } 
      return propertiesArray; 
      })
    );
    
    }
 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactpageService {

  constructor(private _http:HttpClient) {
    
   }
   baseUrl:any="https://nishiportfolio.herokuapp.com/api";
  registerfeed(infos:any){
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'/addFeed',infos);
  }
}

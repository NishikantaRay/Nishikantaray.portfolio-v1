import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private _http:HttpClient) { }
  baseUrl:any="https://nishiportfolio.herokuapp.com/api";
  registermail(infos:any){
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'/addMail',infos);
  }
}

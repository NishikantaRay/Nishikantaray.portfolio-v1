import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpensourceServiceService {
  getData(){
    const arrproject:any=[
      {
        "url":"https://avatars.githubusercontent.com/u/72062226?s=200&v=4",
        "name":"C0D1NG"
      },
      {
        "url":"https://avatars.githubusercontent.com/u/80479011?s=200&v=4",
        "name":"SWITCH-CLUB"
      },
      {
        "url":"https://avatars.githubusercontent.com/u/64004382?s=200&v=4",
        "name":"OpenSourceDSA"
      },
      {
        "url":"https://avatars.githubusercontent.com/u/68415711?s=200&v=4",
        "name":"DevScript"
      },
      {
        "url":"https://avatars.githubusercontent.com/u/32596943?v=4",
        "name":"wejustdevelop"
      },
      {
        "url":"https://pbs.twimg.com/profile_images/1119517021064925184/wJP49tZ7_400x400.png",
        "name":"GirlScript"
      }
  
    ];
    return arrproject;
  }
  constructor() { }
}

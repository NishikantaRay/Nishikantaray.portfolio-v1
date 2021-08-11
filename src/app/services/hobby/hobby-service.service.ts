import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyServiceService {
getData(){
  const arrproject:any =[
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/sergio2.jpg",
      "name":"Sergio"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/sergio.jpg",
      "name":"Sergio"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/face.jpg",
      "name":"Face Illustrator"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/sanjay.jpeg",
      "name":"Sanjay Dutt"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/carry.jpeg",
      "name":"CarryMinati"
    },
    {
      "url":"https://raw.githubusercontent.com/NishikantaRay/Nishikantaray.github.io/main/img/cards.jpeg",
      "name":"QueenofDecks"
    }
  ];
  return arrproject;
}
  constructor() { }
}

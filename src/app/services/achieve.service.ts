import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchieveService {

  constructor() { }

  getData(){
    const arrproject= [
      {
        img: 'https://raw.githubusercontent.com/NishikantaRay/Bootstrap-projects/main/image-port/Study%20Tub.png',
        details:
          ' StudyTub is an online platform where you can get all engineering study material ,video lectures and assignment solution',
        name: 'Studytub ',
        link: 'https://studytub.ml',
      },
      {
        img: 'https://raw.githubusercontent.com/NishikantaRay/Bootstrap-projects/main/image-port/banner.png',
        details:
          ' It is a 5-week long event.The event consists of various sessions and challenges.',
        name: 'Developer Days' ,
        link: 'https://devfolio.co/submissions/home-rental-systemnewest-way-to-find-your-home-39d9',
      },
      {
        img: 'https://raw.githubusercontent.com/NishikantaRay/Bootstrap-projects/main/image-port/Bootstrap%205%20Snippets%20Vs%20Code%20Snippets.png',
        details:
          ' The first, (currently only) and hands down BEST bootstrap 5 snippet extension. Includes templates, powerful utility snippets, and much more.',
        name: 'Bootstrap 5 Code Snippets ',
        link: 'https://marketplace.visualstudio.com/items?itemName=Nishikanta12.bootstrap5snippets',
      },
      
      {
        img: 'https://raw.githubusercontent.com/NishikantaRay/Bootstrap-projects/main/image-port/Bootstrap%205%20Snippets%20Vs%20Code%20Snippets%20(1).png',
        details:
          'To Control the black market of medicines, Control the production of Falsified drugs and provide real and trusted medicines to the buyer.',
        name: 'Hackthe mountain 2.0',
        link: 'https://devfolio.co/submissions/eliminating-black-market-of-medicines-0cd3',
      },
    ];

    return arrproject;
  }
}

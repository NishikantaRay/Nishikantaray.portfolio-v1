import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EduServiceService {
  getData(){
    const eduarray: any = [
      {
        name: 'Silicon Institute of Technology,Bhubaneswer',
        year: '2019--2023',
      },
      {
        name: 'Vidyarthee Residential College,Dhenkanal',
        year: '2017-2019',
      },
      {
        name: 'Brajanath Badajena High School,Dhenkanal',
        year: '2013-2017',
      },
      {
        name: 'Saraswati sishu Vidya Mandir,Dhenkanal',
        year: '2006-2013',
      },
    ];
    return eduarray;
  }
  
  constructor() { }
}

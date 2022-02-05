import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.css']
})
export class HackathonComponent implements OnInit {
  arrproject:any=[
    "Build The World with Dolby.io Hackathon",
    "Hack This Fall 2.0",
    "Hashnode hackathon",
    "SharkHacks3",
    "DEVELOPER DAYS",
    "HACK THE MOUNTAINS 2.O",
    "HackGujurat",
    "Bvp-Hackathon",
    "Programmers-date"
  ];
  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  title:any=[{
    "id":"gtsKT9C9oQA"
  },
  {
    "id":"lttmSnGcF2Q"
  },
  {
    "id":"HEYMUGA2Z_c"
  },
  {
    "id":"ZCqydv1gko0"
  },
  {
    "id":"pMAwAAzzPGw"
  },
  {
    "id":"eKiQLWh10Ds"
  },
  {
    "id":"6UkcjGY7I9w"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

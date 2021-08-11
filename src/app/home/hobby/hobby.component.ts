import { Component, OnInit } from '@angular/core';
import {HobbyServiceService} from '../../services/hobby/hobby-service.service';
@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  
  constructor(private HobbyServiceService :HobbyServiceService) { }
  arrproject:any =[];
  ngOnInit(): void {
    this.arrproject=this.HobbyServiceService.getData();
  }

}

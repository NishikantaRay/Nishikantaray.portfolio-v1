import { Component, OnInit } from '@angular/core';
import {AchieveService} from '../../services/achieve.service'
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  name: any = 'Achievements';
  
  arrproject:any=[];
  constructor(private AchieveService:AchieveService) {
    
  }

  ngOnInit(): void {
    this.arrproject=this.AchieveService.getData();
  }
}

import { Component, OnInit } from '@angular/core';
import {SkillsServiceService} from '../../services/skills/skills-service.service'
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  
  constructor(private SkillsServiceService:SkillsServiceService) { }
  arrproject:any=[];
  ngOnInit(): void {
    this.arrproject=this.SkillsServiceService.getData();
  }

}

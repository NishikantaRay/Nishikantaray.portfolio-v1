import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {EduServiceService} from '../../services/edu/edu-service.service'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  
  constructor(private EduServiceService:EduServiceService ) {}
  eduarray:any=[];
  ngOnInit(): void {
    this.eduarray=this.EduServiceService.getData();
  }
}

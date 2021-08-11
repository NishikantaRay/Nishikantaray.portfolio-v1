import { Component, OnInit } from '@angular/core';
import {ProjectsServiceService} from '../../services/projects/projects-service.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  arrproject:any =[];
  constructor(private ProjectsServiceService:ProjectsServiceService) { }

  ngOnInit(): void {
    this.arrproject=this.ProjectsServiceService.getData();
  }

}

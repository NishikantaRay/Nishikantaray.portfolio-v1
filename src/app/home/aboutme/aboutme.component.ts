import { Component, OnInit } from '@angular/core';
import {AboutserviceService} from '../../services/about/aboutservice.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  constructor(private AboutserviceService:AboutserviceService) {}
  details:any={};
  ngOnInit(): void {
    this.details=this.AboutserviceService.getData();
  }
}

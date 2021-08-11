import { Component, OnInit } from '@angular/core';
import {SwagsServiceService} from '../../services/swags/swags-service.service'
@Component({
  selector: 'app-swags',
  templateUrl: './swags.component.html',
  styleUrls: ['./swags.component.css']
})
export class SwagsComponent implements OnInit {
  
  constructor(private SwagsServiceService:SwagsServiceService) { }
  arrproject:any=[];
  ngOnInit(): void {
    this.arrproject=this.SwagsServiceService.getData();
  }

}

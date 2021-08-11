import { Component, OnInit } from '@angular/core';
import {OpensourceServiceService} from '../../services/opensource/opensource-service.service'
@Component({
  selector: 'app-opensource',
  templateUrl: './opensource.component.html',
  styleUrls: ['./opensource.component.css']
})
export class OpensourceComponent implements OnInit {
  
  constructor(private OpensourceServiceService :OpensourceServiceService) { }
  arrproject:any=[];
  ngOnInit(): void {
    this.arrproject=this.OpensourceServiceService.getData();
  }

}

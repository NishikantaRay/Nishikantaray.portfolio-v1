import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/app/particles-config';
import * as $ from 'jquery';
declare let particlesJS: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".preloader").delay(2000).fadeOut(1000);
    this.invokeParticles();
  }
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
  
}

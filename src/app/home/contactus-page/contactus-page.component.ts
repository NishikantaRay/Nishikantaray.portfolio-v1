import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html',
  styleUrls: ['./contactus-page.component.css']
})
export class ContactusPageComponent implements OnInit {
  
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  constructor() { }
  
  profileForm!: FormGroup;
 
  ngOnInit(): void {
    
   this.profileForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      mail: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      ),
      feed: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  get f()
  {
      return this.profileForm.controls;
  }
}

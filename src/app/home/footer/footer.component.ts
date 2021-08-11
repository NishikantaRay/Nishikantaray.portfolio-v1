import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.mailForm.value);
  }
  mailForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.mailForm = new FormGroup({
      mail: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      )
    });
  }
  get f()
  {
      return this.mailForm.controls;
  }
}

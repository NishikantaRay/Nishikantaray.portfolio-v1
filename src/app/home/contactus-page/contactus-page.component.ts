import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { ContactpageService } from 'src/app/contactpage.service';
import { Feed } from 'src/app/feed';

@Component({
  selector: 'app-contactus-page',
  templateUrl: './contactus-page.component.html',
  styleUrls: ['./contactus-page.component.css']
})
export class ContactusPageComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  constructor(private _userService:ContactpageService) { }
  
  profileForm!: FormGroup;
 
  ngOnInit(): void {
    
   this.profileForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('',[
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
  onSubmit() {
    this._userService.registerfeed(this.profileForm.value).subscribe(Response=>{
      console.log(Response);
      this.message=Response.message;
      this.isSuccess=true;
      this.isError=false;
      },err=>{
        console.log(err);
        this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    })
  }
}

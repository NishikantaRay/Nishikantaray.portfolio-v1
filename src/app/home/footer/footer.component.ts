import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { Mail } from 'src/app/mail';
import { FooterService } from 'src/app/footer.service'; 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //  public userin = new Mail('');
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  mailForm!: FormGroup;
  constructor(private _userService:FooterService) { }

  ngOnInit(): void {
    this.mailForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
      )
    });
  }
  get f()
  {
      return this.mailForm.controls;
  }
  
  onSubmit() {
    // console.log(this.userin);
    // console.log(this.mailForm.value.email);
    // this._userService.registermail(this.userin).subscribe(Response=>{
    //   console.log(Response);
    //   },err=>{
    //     console.log(err);
    //   })
      this._userService.registermail(this.mailForm.value).subscribe(Response=>{
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

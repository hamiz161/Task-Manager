import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from '@angular/forms';







@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements  OnInit{

  public signupFrom : FormGroup|any;

  constructor(private _route:Router,private _http:HttpClient) {}

  ngOnInit(): void {
    this.signupFrom = new FormGroup({
      personalDetails :new FormGroup({
        'username' : new FormControl("",[Validators.required,Validators.minLength(6)]),
        'password' : new FormControl("",[Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
        'email' : new FormControl("",[Validators.required,Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      })
    })


  }

  signup(signupFrom  :FormGroup) {
    console.log(this.signupFrom.value)
    this._http.post("http://localhost:3000/users",this.signupFrom.value).subscribe((res)=>{})

    this.signupFrom.reset();
    this._route.navigate(['home'])

  }


}

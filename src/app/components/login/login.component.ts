import { Component,OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements  OnInit{

  public loginFrom : FormGroup|any;



  constructor(private _route:Router,private  http: HttpClient ,private authService:AuthService ) {}
  messageErrorSpan : Boolean = false;


  items : Array<any> = [
    {name:"username", type:"text", data:"Username"},
    {name:"password", type:"password",data:"Password"}


    ]

  ngOnInit(): void {
    this.loginFrom = new FormGroup({

      'username' : new FormControl("",Validators.required),
      'password' : new FormControl("",Validators.required),
    })


  }



  login(data: FormGroup) {
    let val =this.loginFrom.value

    this.http.get<any>("http://localhost:3000/register").subscribe({
        next:(res : any)=>{
                 let  user   = res.find((a:any)=>{
                   return  a.personalDetails.username == val.username && a.personalDetails.password== val.password
                  })


            if(user){
              this._route.navigate(['home'])
            }else{
              this.messageErrorSpan =true
            }

        }

      }


      )
    this.loginFrom.reset();

  }

}

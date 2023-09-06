import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [

  {path : "home",component :HomeComponent},
  {path : "login",component :LoginComponent},
  {path : "sign-up",component :SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],

  exports: [RouterModule],


})
export class AppRoutingModule { }

import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  currentAction: any ;

  actions : Array<any> = [

    {title : "Login", route:"/login",data:"box-arrow-in-right"},
    {title : "Sign Up", route:"/sign-up",data:"person-plus"}
  ]

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}

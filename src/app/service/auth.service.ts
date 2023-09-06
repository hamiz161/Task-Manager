import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  addAccessToken(accessToken:string){
    localStorage.setItem('accessToken',accessToken);
  }
}

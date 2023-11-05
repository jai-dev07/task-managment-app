import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): Boolean {
    return sessionStorage.getItem('username') ? true: false;
  }
}

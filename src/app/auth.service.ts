import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // initially this will be false, this needs to be set to true
  // by the login/register team on successfull login

  // I'm keeping this to true now, so that my team (batch1) can work on it
  isLoggedIn: boolean = true;

  constructor(private router: Router) { }

  // method which checks whether the user is approved or not
  public isLoggedInOrNot() {
    return this.isLoggedIn;
  }
}

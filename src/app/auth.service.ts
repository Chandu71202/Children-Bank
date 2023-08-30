import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isapproved!: false;

  constructor(private router: Router) { }

  public isApprovedorNot() {
    return this.isapproved;
  }
}

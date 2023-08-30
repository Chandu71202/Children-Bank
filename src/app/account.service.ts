import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  accounturl = "http://localhost:3000/accounts/";

  public addingAccount(data:any){
    return this.http.post(this.accounturl,data);
  }
  
}

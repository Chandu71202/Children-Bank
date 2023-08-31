import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  accounturl = "http://localhost:3000/accounts/";

  // Creating a new account to the user
  public addingAccount(data: any) {
    return this.http.post(this.accounturl, data);
  }

  // Getting all the accounts of the user
  public getAccount(id: any): Observable<any> {
    return this.http.get(this.accounturl + `${id}`);
  }

  // Updating the balance of the account by withdraw, deposit and transfer
  updateBalance(id: any, newBalance: number): Observable<any> {
    return this.http.patch(this.accounturl + `${id}`, { balance: newBalance });
  }

  // To add all the transactions into the transaction array
  updateTransaction(id: any, new_transaction: any){
    return this.http.patch(this.accounturl + `${id}`, {transactions:new_transaction});
  }
  

}


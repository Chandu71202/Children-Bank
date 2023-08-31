import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  accounturl = "http://localhost:3000/accounts/";

  public addingAccount(data: any) {
    return this.http.post(this.accounturl, data);
  }

  public getAccount(id: any): Observable<any> {
    return this.http.get(this.accounturl + `${id}`);
  }

  updateBalance(id: any, newBalance: number): Observable<any> {
    return this.http.patch(this.accounturl + `${id}`, { balance: newBalance });
  }

}


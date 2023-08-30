import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userurl = "http://localhost:3500/users/";

  public getUserByid(id:any){
    return this.http.get(this.userurl+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl = "http://localhost:3500/users/"

  public getUserByid(id:any){
    return this.http.get(this.apiurl+id);
  }
}

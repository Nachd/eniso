import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { 
  }

  url = "http://localhost:5000";

  inscription(user : User){
    return this.http.post(this.url+'/register' , user)
  }
  authentication(user_email : String , user_password : String){
    return this.http.post(this.url+'/login' ,{email : user_email , password : user_password} )
  }
}

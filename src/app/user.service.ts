import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    public afAuth: AngularFireAuth) {
  }

  url = "http://localhost:5000";
//https://drive.google.com/open?id=1Myemk9wu1Ce4wNF2gGuoYjwJxsb50sUj
  inscription(user: User) {
    return this.http.post(this.url + '/register', user)
  }
  authentication(user_email: String, user_password: String) {
    return this.http.post(this.url + '/login', { email: user_email, password: user_password })
  }

  verifyAccount(email) {
    return this.http.get(this.url + '/verify/' + email)
  }

  EmailPassRegister(user) {
    return new Promise((resolve, reject) => {
      firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
    })


  }
  EmailPassLogin(user) {
    return new Promise((resolve, reject) => {
      firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  }
  GoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    })

  }
}

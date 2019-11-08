import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  form : FormGroup;
  email ; password; nom ; prenom ; date_naissance;
  x : {nom : any ,prenom : any}
  ngOnInit() {
    this.form = new FormGroup({
      'email' : new FormControl([Validators.required , Validators.email]),
      'password' : new FormControl([Validators.required , Validators.minLength(6)]),
      'nom' : new FormControl([Validators.required]),
      'prenom' : new FormControl([Validators.required]),
      'date_naissance' : new FormControl(),
    })
  }
  aa(){
    console.log(this.form)
  }

}

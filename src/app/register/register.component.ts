import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router ,
     private userApi : UserService) { }
  registerForm : FormGroup
  user : User = new User();
  ngOnInit() {
    this.registerForm = new FormGroup({
      'control_first_name' : new FormControl([Validators.required ]),
      'control_last_name' : new FormControl([Validators.required ]),
      'control_birth_date' : new FormControl([Validators.required ]),
      'control_email' : new FormControl([Validators.required , Validators.email]),
      'control_password' : new FormControl([Validators.required, Validators.minLength(6)])
    })
  }
  save(){

    this.userApi.EmailPassRegister(this.user)
    .then((data)=>{
      console.log(data)
    },err=>{
      console.log(err)
    })

    console.log(this.user)
    this.userApi.inscription(this.user)
    .subscribe(
      (data : User)=>{ // success case : status 200
        Swal.fire("Saved" , "Please verify you email" , "success");
      },
      (failure)=>{ //error case : status 403
        console.log(failure);
        Swal.fire("Error" , failure.error.message , "error");
      })
  
   
  }
  google(){
    this.userApi.GoogleLogin()
    .then((data)=>{
      console.log(data)
    },err=>{
      console.log(err)
    })
  }
}

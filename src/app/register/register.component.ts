import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router) { }
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
 
    console.log(this.user)
    //  this.router.navigate(['/']);
  
   
  }
}

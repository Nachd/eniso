import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  loginForm : FormGroup
  email ; password;
  ngOnInit() {
    this.loginForm = new FormGroup({
      'control_email' : new FormControl([Validators.required , Validators.email]),
      'control_password' : new FormControl([Validators.required, Validators.minLength(6)])
    })
  }
  save(){
    //test
    if( this.email == 'a@a.a' && this.password == '123456'){
      this.router.navigate(['/todo']);
    }else{
      Swal.fire('Invalid email or password' ,'' , 'error')
    }
   
  }

}

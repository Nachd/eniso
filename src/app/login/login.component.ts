import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router , private userApi : UserService) { }
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

    this.userApi.authentication(this.email , this.password)
    .subscribe(
      (data : User)=>{
        console.log(data);
        localStorage.setItem('user' , JSON.stringify(data))
        this.router.navigate(['/admin']);
      },
      (err)=>{
        Swal.fire('Error' , err.error.message , 'error')
      }
    )
    
 
   
  }

}

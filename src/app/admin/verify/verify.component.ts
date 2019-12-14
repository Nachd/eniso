import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private userApi : UserService,
    private router : Router) { }

  email;
  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
    this.userApi.verifyAccount(this.email)
    .subscribe((data)=>{
        this.router.navigate(['/']);
    },(err)=>{
      alert("error");
    })
  }

}

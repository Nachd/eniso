import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }
user;
  ngOnInit() {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
      console.log(this.user)
    }else{
      this.router.navigate(['/'])
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
}

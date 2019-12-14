import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users : User[]=[];
  selectedUser : User;
  content = '';
  me : User;
  messages : any[] = [];
  constructor(private userApi : UserService ,
     private router : Router,
     private chatApi : ChatService) { }

  ngOnInit() {

    if(localStorage.getItem('user')){
      this.me = JSON.parse(localStorage.getItem('user'));
    }else{
      this.router.navigate(['/']);
    }
    this.userApi.getAll()
    .subscribe((data : User[])=>{
      this.users = data;
     
    })

    this.chatApi.getMessage()
    .subscribe((data)=>{
      console.log(data)
      if(data.receivedId == this.me._id){
        this.messages.push(data); 
      }
    })
  }
  selectUser(user){
    this.selectedUser= user;
  }

  sendMessage(){
    let body={
      content : this.content,
      senderId : this.me._id,
      receivedId : this.selectedUser._id ,
      date : new Date()
    }
    this.chatApi.sendMessage(body);
    this.messages.push(body);
    this.content='';

  }

}

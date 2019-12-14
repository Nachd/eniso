import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'http://127.0.0.1:5000';
  socket;
  constructor() {
    this.socket = io(this.url);
   }

   sendMessage(body){
      this.socket.emit('new-message' , body)
   }
   getMessage(){
    return Observable.create((observe)=>{
      this.socket.on('new-message' , (body)=>{
        console.log(body)
        observe.next(body);
      })
    })
   }
}

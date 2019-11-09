import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
  }

  list : string[] = [];
  title = 'eniso';
  nom;
  save(){
    //alert('saved !')
    this.list.push(this.nom);
    this.nom ='';
  }

}

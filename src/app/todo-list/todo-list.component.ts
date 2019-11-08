import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  newToDo: string = '';
  list: any[] = [];
  ngOnInit() {
  }
  addToDo() {
    let todo = {
      id : this.list.length,
      content: this.newToDo,
      isDone: false,
      isRemoved : false,
      date : new Date()
    }
    this.list.push(todo)
    this.newToDo = '';
  }

  done(i) {
    this.list[i].isDone = true;
  }
  remove(i) {
   // this.list = this.list.filter((s) => s.id != id)
    this.list[i].isRemoved = true;
  }
}

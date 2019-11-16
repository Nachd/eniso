import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public translate : TranslateService) { }

 
  ngOnInit() {
  }

  list : any[] = [];
  title = 'eniso';
  nom;
  save(){
    //alert('saved !')
    let obj = {
      id : this.list.length +1,
      designation : this.nom,
      isDone : false,
      isRemoved : false
    }
    this.list.push(obj);
    this.nom ='';
  }

  remove(i){
    //this.list = this.list.filter((x) => x != i )
    this.list[i].isRemoved = true;
  }

  done(i){
    this.list[i].isDone = true
  }

 
}

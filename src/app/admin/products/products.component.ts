import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
list : Product[];
list_copy : Product[];
  constructor(private http : HttpClient) { }

  ngOnInit() {
     this.http.get('http://localhost:4200/assets/products.json')
     .subscribe(
       (data : Product[])=> {
        console.log(data) 
        this.list = data
        this.list_copy = data },
       error=> console.log(error)
     )
  }
  search(v){ 
    this.list_copy = this.list.filter((x)=> x.title.toLowerCase().indexOf(v.toLowerCase()) >-1 )
  }
  categoryChange(v){
    if(v == 'all'){
      this.list_copy = this.list
    }else{
      this.list_copy = this.list.filter((x)=> x.category == v )
    }

  }
  sort(v){
    if(v == 'desc'){
      this.list_copy = this.list.sort((a : Product , b:Product)=> a.price > b.price ? -1 : 0)
    }else{
      this.list_copy = this.list.sort((a : Product , b:Product)=> a.price < b.price ? -1 : 0)

    }
  }

}

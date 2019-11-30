import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private active_route : ActivatedRoute) { }
  new_product : Product = new Product();
  form : FormGroup;
  id;
  isNew = true;
  ngOnInit() {
    this.id = this.active_route.snapshot.params['id'];
    if(this.id){
      this.isNew = false;
      // get product by id from database 
    }
    this.form = new FormGroup({
      'ref' : new FormControl([Validators.required]),
      'title' : new FormControl([Validators.required]),
      'price' : new FormControl([Validators.required]),
      'category' : new FormControl(),
      'description' : new FormControl(),
      'isInStock' : new FormControl(),
      'picture' : new FormControl()
    })
  }

  save(){
    console.log(this.new_product);
    Swal.fire('saved' , '' , 'success')
  }

  upload_picture(event){
    var files_list = event.target.files;
    var image = files_list[0];

    var reader = new FileReader();
    reader.onload = this.load_picture.bind(this);
    reader.readAsBinaryString(image);
  }

  load_picture(e){
    var binaryString =e.target.result;
    this.new_product.picture = 'data:image/png;base64,'+btoa(binaryString);
  }
  
}

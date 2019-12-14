import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { VerifyComponent } from './admin/verify/verify.component';
import { ChatComponent } from './admin/chat/chat.component';

const routes: Routes = [
  {
    path : 'todo',
    component : TodoComponent
  } ,
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'admin',
    component : DashboardComponent,
    children : [
      {
        path :'',
        component : ProductsComponent
      },
      {
        path :'addproduct',
        component : AddProductComponent
      },
      {
        path :'editproduct/:id',
        component : AddProductComponent
      }
    ]
  },{
    path: 'verify/:email',
    component : VerifyComponent
  },
  {
    path : 'chat',
    component : ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

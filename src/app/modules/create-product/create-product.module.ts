import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';



@NgModule({
  declarations: [
    CreateProductComponent,
    FormProductComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CreateProductModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  formProduct: Boolean = true;
  formUser: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.formProduct = !this.formProduct;
    this.formUser = !this.formUser;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  imgList:Array<ImageInterface> = [
    {src: 'assets/img/hook.png', name: 'product', route: '/style-manual', active: false },
    {src: 'assets/img/create_item.png', name: 'user', route: '/create-product', active: false },
];

  formProduct: Boolean = true;
  formUser: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleForm(name) {
    if(name == 'product') {
      this.formUser = false;
      this.formProduct = true;
    }
    if(name == 'user') {
      this.formProduct = false;
      this.formUser = true;
    }
  }

}

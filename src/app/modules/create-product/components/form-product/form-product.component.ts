import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

 @Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

  departmentsList: Array<Deparment>;

  departmentModel: Deparment;

  constructor() {
  }

  ngOnInit() {
    this.departmentsList = [
      {
        id: 1,
        name: 'Male'
      },
      {
        id: 2,
        name: 'Female'
      },
      {
        id: 3,
        name: 'Child'
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  departmentModel: Deparment;

  departmentList: Deparment[];

  departmentPath: string =  'department';

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getAll().subscribe( (response: any) => {
      this.departmentList = response.data.data
    });
  }

}

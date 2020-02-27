import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { GroupService } from '../../services/group.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  departmentModel: Deparment;
  departmentList: Deparment[];

  groupModel: Group;
  groupList: Group[];

  categoryModel: Category;
  categoryList: Category[];

  constructor(private departmentService: DepartmentService,
              private groupService: GroupService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.departmentService.getAll().subscribe( (response: any) => {
      this.departmentList = response.data.data;
    });
  }

  changeDepartment() {
    if(this.departmentModel == null) {
      this.resetModel(this.groupModel);
      this.resetModel(this.categoryModel);
      this.groupList.length = 0;
      this.categoryList.length = 0;
      return;
    }
    this.groupService.getByParent(this.departmentModel.id)
      .subscribe( (response: any) => {
        this.groupList = response.data.data;
    });
  }

  changeGroup() {
    if(this.groupModel == null) {
      this.resetModel(this.categoryModel);
      this.categoryList.length = 0;
      return;
    }

    this.categoryService.getByParent(this.groupModel.id)
      .subscribe( (response: any) => {
        this.categoryList = response.data.data;
      });
  }

  resetModel(model: any) {
    for(let key in model) {
      if(model.hasOwnProperty(key)) {
        model[key] = null;
      }
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DepartmentService } from './department.service';

@NgModule({
  declarations: [
    CreateProductComponent,
    AutocompleteComponent,
    FormUserComponent,
    FormProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    DepartmentService
  ]
})
export class CreateProductModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BuildingComponent } from './building/building.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    AboutComponent,
    BuildingComponent,
    Error404Component,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { StyleManualModule } from './modules/style-manual/style-manual.module';
import { SuppliersScheduleModule } from './modules/suppliers-schedule/suppliers-schedule.module';
import { RpSearchModule } from './modules/rp-search/rp-search.module';
import { CreateProductModule } from './modules/create-product/create-product.module';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './modules/create-product/services/department.service';
import { ModalGalleryComponent } from './modules/style-manual/components/modal-gallery/modal-gallery.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    PagesModule,
    NgSelectModule,
    FormsModule,
    LandingPageModule,
    RpSearchModule,
    CreateProductModule,
    HomeModule,
    SuppliersScheduleModule,
    StyleManualModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    DepartmentService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ModalGalleryComponent,
  ]
})
export class AppModule { }

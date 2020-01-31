import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './modules/home/home.component';

import { AboutComponent } from './modules/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { SideNavComponent } from './modules/side-nav/side-nav.component';
import { StyleManualComponent } from './modules/style-manual/style-manual.component';
import { ModalGalleryComponent } from './modules/modal-gallery/modal-gallery.component';
import { SuppliersScheduleComponent } from './modules/suppliers-schedule/suppliers-schedule.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { BuildingComponent } from './pages/building/building.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    StyleManualComponent,
    SideNavComponent,
    ModalGalleryComponent,
    SuppliersScheduleComponent,
    LandingPageComponent,
    BuildingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalGalleryComponent
  ]
})
export class AppModule { }

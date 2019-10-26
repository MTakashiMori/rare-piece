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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

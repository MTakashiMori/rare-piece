import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }

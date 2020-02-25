import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NgbdModalComponent,
    NgbdModalContent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NgbdModalComponent,
    SideNavComponent,
    RouterModule,
  ],
  entryComponents: [
    NgbdModalContent,
  ]
})
export class SharedModule { }

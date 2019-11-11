import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    NgbdModalComponent
  ],
  entryComponents: [
    NgbdModalContent
  ]
})
export class SharedModule { }

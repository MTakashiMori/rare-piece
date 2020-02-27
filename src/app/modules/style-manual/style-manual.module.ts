import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ModalGalleryComponent } from './components/modal-gallery/modal-gallery.component';
import { StyleManualComponent } from './components/style-manual/style-manual.component';



@NgModule({
  declarations: [
    StyleManualComponent,
    ModalGalleryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StyleManualModule { }

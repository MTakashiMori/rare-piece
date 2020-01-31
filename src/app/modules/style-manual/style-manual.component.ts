import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalGalleryComponent } from '../modal-gallery/modal-gallery.component';

@Component({
  selector: 'app-style-manual',
  templateUrl: './style-manual.component.html',
  styleUrls: ['./style-manual.component.css']
})
export class StyleManualComponent implements OnInit {

  imgListWoman: any = [
    {src: 'assets/img/style-manual/clothes.jpeg', name: 'woman clothes', route: ''},
    {src: 'assets/img/style-manual/woman-shoes.jpeg', name: 'woman shoes', route: ''},
    {src: 'assets/img/style-manual/watch.jpeg', name: 'watch', route: ''},
    {src: 'assets/img/style-manual/makeup.jpeg', name: 'makeup', route: ''},
    {src: 'assets/img/style-manual/book-dark-orange.jpeg', name: 'book', route: ''},
    {src: 'assets/img/style-manual/bag.jpeg', name: 'bag', route: ''},
  ];

  imgListChildren:Array<Object> = [
    {src: 'assets/img/style-manual/baby-suit.jpeg', name: 'baby clothes', route: ''},
    {src: 'assets/img/style-manual/wardrobe.jpeg', name: 'furniture', route: ''},
    {src: 'assets/img/style-manual/troller.jpeg', name: 'troller', route: ''},
    {src: 'assets/img/style-manual/toy-robot.jpeg', name: 'toy', route: ''},
    {src: 'assets/img/style-manual/woman-purse.jpeg', name: 'woman purse', route: ''},
    {src: 'assets/img/style-manual/running-shoes.jpeg', name: 'running shoes', route: ''},
    {src: 'assets/img/style-manual/baby-bootle.jpeg', name: 'baby bootle', route: ''},
    {src: 'assets/img/style-manual/book-orange.jpeg', name: 'book', route: ''},
    {src: 'assets/img/style-manual/duck.jpeg', name: 'duck', route: ''},
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(name) {
    const modalRef = this.modalService.open(ModalGalleryComponent);
    modalRef.componentInstance.name = name;
  }

}

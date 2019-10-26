import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-manual',
  templateUrl: './style-manual.component.html',
  styleUrls: ['./style-manual.component.css']
})
export class StyleManualComponent implements OnInit {



  imgListWoman: any = [
    {src: 'assets/img/style-manual/clothes.jpeg', name: 'clothes', route: ''},
    {src: 'assets/img/style-manual/woman-shoes.jpeg', name: 'woman shoes', route: ''},
    {src: 'assets/img/style-manual/watch.jpeg', name: 'watch', route: ''},
    {src: 'assets/img/style-manual/makeup.jpeg', name: 'makeup', route: ''},
    {src: 'assets/img/style-manual/book-dark-orange.jpeg', name: 'book', route: ''},
    {src: 'assets/img/style-manual/bag.jpeg', name: 'bag', route: ''},
  ];

  imgListChildren:Array<Object> = [
    {src: 'assets/img/style-manual/baby-suit.jpeg', name: 'clothes', route: ''},
    {src: 'assets/img/style-manual/wardrobe.jpeg', name: 'woman shoes', route: ''},
    {src: 'assets/img/style-manual/troller.jpeg', name: 'watch', route: ''},
    {src: 'assets/img/style-manual/toy-robot.jpeg', name: 'makeup', route: ''},
    {src: 'assets/img/style-manual/woman-purse.jpeg', name: 'book', route: ''},
    {src: 'assets/img/style-manual/running-shoes.jpeg', name: 'bag', route: ''},
    {src: 'assets/img/style-manual/baby-bootle.jpeg', name: 'bag', route: ''},
    {src: 'assets/img/style-manual/book-orange.jpeg', name: 'bag', route: ''},
    {src: 'assets/img/style-manual/duck.jpeg', name: 'bag', route: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}

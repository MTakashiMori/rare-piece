import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imgList:Array<Object> = [
    {src: 'assets/img/search.png', name: 'search', route: '/search', active: true, title: 'PR Busca' },
    {src: 'assets/img/hook.png', name: 'hook', route: '/style-manual', active: false, title: 'Classificação de produtos' },
    {src: 'assets/img/calendar.png', name: 'schedule', route: '/suppliers-schedule', active: true, title: 'Agenda de fornecedor' },
    {src: 'assets/img/create_item.png', name: 'create_item', route: '/create-product', active: true, title: 'Cadastro de produtos' },
];

  constructor() { }

  ngOnInit() {
  }

}

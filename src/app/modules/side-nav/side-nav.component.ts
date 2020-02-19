import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  imgList:Array<ImageInterface> = [
      {src: 'assets/img/search.png', name: 'search', route: '/search', active: false },
      {src: 'assets/img/hook.png', name: 'hook', route: '/style-manual', active: false },
      {src: 'assets/img/calendar.png', name: 'schedule', route: '/suppliers-schedule', active: false },
      {src: 'assets/img/create_item.png', name: 'create_item', route: '/create-product', active: true },
  ];

  constructor(private router: Router) { 
    router.events.subscribe( (event) => {
      if(event instanceof NavigationEnd) {
        this,this.findRoute(event.url);
      }
    });
  }

  findRoute(routeName: String) {
    const route = this.imgList.find( (img) => {
      return img.route === routeName;
    });
    route.active = true;
    this.setImgList(route);
  }

  setImgList(route: ImageInterface) {
    this.imgList.filter( (item, index) => {
      if(item.name === route.name) {
        this.imgList.splice(index, 1);
        this.imgList.unshift(route);
      }
    });
  }

}

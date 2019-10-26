import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  imgList:Array<Object> = [
      {src: 'assets/img/hook.png', name: 'hook', route: '', active: false },
      {src: 'assets/img/schedule.png', name: 'schedule', route: '', active: false },
      {src: 'assets/img/hook.png', name: 'computes', route: '', active: false },
  ];

  constructor() { }

  ngOnInit() {
  }

}

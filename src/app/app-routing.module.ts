import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { Error404Component } from './pages/error404/error404.component'
import { BuildingComponent} from './pages/building/building.component';

import { StyleManualComponent } from './modules/style-manual/style-manual.component';
import { SuppliersScheduleComponent } from './modules/suppliers-schedule/suppliers-schedule.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

const routes: Routes = [
    { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { 
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'style-manual',
          component: StyleManualComponent
        },
        {
          path: 'suppliers-schedule',
          component: SuppliersScheduleComponent
        },
      ]
    },
    {
      path: 'home',
      component: LandingPageComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'building',
      component: BuildingComponent
    },
    { 
      path: '**', 
      component: Error404Component
    },
    
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
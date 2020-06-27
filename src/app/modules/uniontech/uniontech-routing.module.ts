import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniontechComponent } from './uniontech.component';
import { HomeComponent } from './home/home.component';


import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: UniontechComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LazyLoadImageModule,
  ],
  exports: [RouterModule]
})
export class UniontechRoutingModule { }

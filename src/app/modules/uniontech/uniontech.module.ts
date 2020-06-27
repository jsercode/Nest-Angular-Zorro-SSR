import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniontechRoutingModule } from './uniontech-routing.module';
import { UniontechComponent } from './uniontech.component';
import { HomeComponent } from './home/home.component';

// Zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

const nzModules: Array<any> = [
  NzLayoutModule,
  NzGridModule
];
@NgModule({
  declarations: [UniontechComponent, HomeComponent],
  imports: [
    CommonModule,
    UniontechRoutingModule,
    ...nzModules
  ]
})
export class UniontechModule { }

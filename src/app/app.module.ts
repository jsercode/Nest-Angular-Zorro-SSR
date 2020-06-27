import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

const ngZorroConfig: NzConfig = {
  button: { nzSize: 'large' }
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'uos-app' }),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./modules/uniontech/uniontech.module').then(m => m.UniontechModule),
          },
        ]
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: '**',
        loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
      }
    ]),
    SharedModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ]
})
export class AppModule { }

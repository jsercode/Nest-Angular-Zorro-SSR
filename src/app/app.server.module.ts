import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule
} from "@angular/platform-server";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { UniversalInterceptorService } from "./modules/shared/interceptors/universal-interceptor.service";

// 必须引入模块
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { zh_CN, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    HttpClientModule,
    NoopAnimationsModule,
    NzI18nModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: [HTTP_INTERCEPTORS, NZ_I18N],
      useValue: zh_CN,
      useClass: UniversalInterceptorService,
      multi: true // <-- important (you can have many interceptors)
    }
  ]
})
export class AppServerModule { }

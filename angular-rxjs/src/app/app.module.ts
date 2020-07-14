import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { translocoLoader } from './transloco.loader';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig,
} from '@ngneat/transloco';

import { AppComponent } from './app.component';
import { SharedModule } from './core/shared/shared.module';
import { AuthSharedModule } from './modules/auth/shared.module';
import { UserSessionService } from './modules/user/services/user-session.service';
import { AuthGuard } from './modules/auth/services/guard';
import { HttpConfigInterceptor } from './httpconfig.interceptor';
import { GlobalErrorHandler, ErrorLogService } from './core/services';

import { appConfig } from '@env/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AuthSharedModule,
    AppRoutingModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    ErrorLogService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },

    UserSessionService,
    AuthGuard,

    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'pl'],
        listenToLangChange: true,
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: appConfig.production,
      } as TranslocoConfig,
    },

    translocoLoader,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

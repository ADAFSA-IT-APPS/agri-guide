import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_guards/basic-auth.interceptor';
import { ServerErrorInterceptor } from './_guards/server-error.interceptor';
import { RequestCache } from './_guards/request-cache';
import { NgOtpInputModule } from  'ng-otp-input';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import * as Sentry from "sentry-cordova";
import { SentryIonicErrorHandler } from './_guards/sentryIonicErrorHandler'; 
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SplashScreenPage } from './splash-screen/splash-screen.page';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Sentry.init({ dsn: "https://1594aa953c764bc9ab8cac349656c4ed@o549457.ingest.sentry.io/5672268" });

@NgModule({
  declarations: [AppComponent, SplashScreenPage],
  entryComponents: [SplashScreenPage],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    NgOtpInputModule,
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader, 
        useFactory: (createTranslateLoader),  
        deps: [HttpClient] 
      } 
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RequestCache,
    Diagnostic,
    Geolocation,
    InAppBrowser,
    OneSignal,
    PreviewAnyFile,
    AppVersion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {provide: ErrorHandler, useClass: SentryIonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule {}


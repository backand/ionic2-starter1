import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import io from 'socket.io-client';
window["io"] = io;

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CrudPage } from '../pages/crud/crud';
import { TabsPage } from '../pages/tabs/tabs';

import { BackandService } from '@backand/angular2-sdk';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// In App Login only
import { GooglePlus } from '@ionic-native/google-plus';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

// Facebook login for Ionic web shared in Facebook
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CrudPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FacebookModule.forRoot()
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CrudPage,
    TabsPage
  ],
  providers: [ 
    StatusBar,
    SplashScreen,
    BackandService, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    Facebook
  ]
})
export class AppModule {}

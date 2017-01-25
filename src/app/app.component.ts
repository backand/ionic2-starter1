import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { BackandService } from '@backand/angular2-sdk'

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
// @Component({
//   template: `<h1>Hello World!</h1>`
// })
export class MyApp {
  rootPage;

  constructor(platform: Platform, private backand:BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      backand.init({
        appName: 'your app name',
        signUpToken: 'your sign up token',
        anonymousToken: 'your anonymous token',
        runSocket: true,
        isMobile: platform.is('mobile')
      });
      this.rootPage = TabsPage;
    });
  }
}

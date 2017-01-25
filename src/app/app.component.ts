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
        appName: 'todo33353',
        signUpToken: '215e5812-5789-4475-8ccb-42f3232da176',
        anonymousToken: '43a174e6-1a88-46dd-9081-99d3d22131a6',
        runSocket: true,
        isMobile: platform.is('mobile')
      });
      this.rootPage = TabsPage;
    });
  }
}

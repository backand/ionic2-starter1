# Backand Ionic 2 Starter
Create a mobile application with [ionic](http://www.ionicframework.com) and [backand](http://www.backand.com).
**NOTE: Compatible with Ionic 3.1.2**

Due to recent changes of Ionic CLI it does no support creating an app from a GitHub repo. Hence, you will need to clone or download these starter and use the `src` and `www` folderd.

## Running the app

- Create an Ionic app:
```bash
$ ionic start mynewapp blank
$ cd mynewapp
```

- Replace folders from this starter:
1. `src`
2. `www`

- Install dependencies:
```bash
$ npm i -S @backand/angular2-sdk socket.io-client @types/node @types socket.io-client ionic-native
```

- Install Cordova Plugins
```bash
$ ionic cordova plugin add cordova-plugin-inappbrowser
```

- Run the app
```bash
$ ionic serve
```

- In order to run the app on another platform (Android/iOS):
```bash
$ ionic cordova platform add <platform>
$ ionic cordova run <platform>
```


## Setting up your own Backand application
If you want to customize the data model, or change how authentication takes place, follow these steps:

- Create a free personal application at [backand.com](https://www.backand.com/apps/#/sign_up)

- Change the app's parameters (/src/app/app.component.ts) in the init function with your new app parameters:
```javascript
backand.init({
  appName: 'your app name',
  signUpToken: 'your signup token',
  anonymousToken: 'your anonymousToken token',
  runSocket: true,
  mobilePlatform: 'ionic'
});
```

- Delete the starter content, and begin writing your app!

Review our Angular 2 SDK to get started - [angular2-sdk](https://github.com/backand/angular2-sdk).

# In App Social Login 

In App social login is intended to use the native social SDK of Faceboook or Google. For Google this is due to recent restrictions in Google that prevent using the Signup with Google through web views. 

In the `signup` screen we label this functionality as **In App Social**

## Google 

Install [Ionic Native Google Plus plugin](https://ionicframework.com/docs/native/google-plus/)

## Facebook

Install [Ionic Native Facebook plugin](https://ionicframework.com/docs/native/facebook/)

# Ionic Web App for Facebook Sharing

When an Ionic web app is shared in Facebook feed, the usual Backand social signup with Facebook will not work. 

1. Detect this case in your code with:

    function isFacebookApp() {
       var ua = navigator.userAgent || navigator.vendor || window.opera;
       return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    }

2. Install `ngx-facebook`:

    npm install ngx-facebook --save

3. Use the code labeled **Social Web** in `signup` screen.


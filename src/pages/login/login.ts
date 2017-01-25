import {Component} from '@angular/core';
// import {bootstrap} from '@angular/platform-browser-dynamic';
import 'rxjs/Rx'
import { BackandService } from '@backand/angular2-sdk'

@Component({
    templateUrl: 'login.html',
    selector: 'page-login',
})
export class LoginPage {

  username:string = 'test@angular2.com';
  password:string = 'angular2';
  auth_type:string = "N/A";
  is_auth_error:boolean = false;
  auth_status:string = null;
  loggedInUser: string = '';


  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private backand: BackandService) {
      this.backand.user.getUserDetails().then(
          (data: any) => {
              console.log(data);
              this.loggedInUser = data.data.username;
              this.auth_status = 'OK';
              this.auth_type = data.data.token_type == 'Anonymous' ? 'Anonymous' : 'Token';
          },
          (err: any) => {
              console.log(err);
              this.loggedInUser = null;
              this.auth_status = null;
              this.auth_type = null;
          }
      );
  }


  public getAuthTokenSimple() {
      this.auth_type = 'Token';
      this.backand.signin(this.username, this.password)
          .then((data: any) => {
              console.log(data);
              this.auth_status = 'OK';
              this.is_auth_error = false;
              this.loggedInUser = data.data.username;
              this.username = '';
              this.password = '';
          },
          (error: any) => {
              console.log(error);
              let errorMessage: string = error.data.error_description;
              this.auth_status = `Error: ${errorMessage}`;
              this.is_auth_error = true;
              console.log(errorMessage)
              this.auth_status = 'ERROR';
          }
      );
  }

  public useAnonymousAuth() {
      this.backand.useAnonymousAuth()
      .then((data: any) => {
          console.log(data);
          this.auth_status = 'OK';
          this.is_auth_error = false;
          this.loggedInUser = data.data.username;
      },
      (error: any) => {
          console.log(error);
          let errorMessage: string = error.data.error_description;
          this.auth_status = `Error: ${errorMessage}`;
          this.is_auth_error = true;
          console.log(errorMessage)
          this.auth_status = 'ERROR';
      });

  }

  public socialSignin(provider: string) {
    this.backand.socialSignin(provider)
      .then((data: any) => {
            console.log('Sign up succeeded with:' + provider);
            this.auth_status = 'OK';
            this.is_auth_error = false;
            this.loggedInUser = data.data.username;
      },
      (error: any) => {
            console.log(error)
            let errorMessage: string = error.data.error_description;
            this.auth_status = `Error: ${errorMessage}`;
            this.is_auth_error = true;
            console.log(errorMessage)
            this.auth_status = 'ERROR';
      }
    );
  }

  public signOut() {
      this.auth_status = null;
      this.backand.signout();
  }



  public changePassword() {
      if (this.newPassword != this.confirmNewPassword){
          alert('Passwords should match');
          return;
      }
      this.backand.changePassword(this.oldPassword, this.newPassword)
          .then((data: any) => {
                  alert('Password changed');
                  this.oldPassword = this.newPassword = this.confirmNewPassword = '';
          },
          (err: any) => {
                  console.log(err.data.error_description)
          }
      );
  }

}

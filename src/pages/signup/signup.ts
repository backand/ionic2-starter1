import {Component} from '@angular/core';
import 'rxjs/Rx'
import { BackandService } from '@backand/angular2-sdk'

@Component({
  templateUrl: 'signup.html',
  selector: 'page-signup',
})
export class SignupPage {

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(private backand: BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName)
      .then((data: any) => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      (err: any) => {
          console.log(err)
      }
    );
  }

  // public socialSignup(provider) {
  //   this.backand.socialSignup(provider)
  //     .then((data: any) => {
  //           console.log('Sign up succeeded with:' + provider);
  //     },
  //     (err: any) => {
  //           console.log(err)
  //     }
  //   );
  // }

  // public inAppSocial(provider) {
  //   var $obs = backand.service.inAppSocial(provider);
  //   $obs.subscribe(
  //       data => {
  //           console.log('Sign up succeeded with:' + provider);
  //       },
  //       err => {
  //           backand.service.logError(err)
  //       },
  //       () => console.log('Finish Auth'));
  // }
}

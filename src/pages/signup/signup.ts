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

  constructor(private backand: BackandService) {}

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.signup(this.firstName, this.lastName, this.email, this.signUpPassword, this.confirmPassword)
      .then((res: any) => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      (err: any) => {
        alert(err.data)
      }
    );
  }

}

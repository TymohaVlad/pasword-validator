import { Component } from '@angular/core';
@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  mod: string = 'empty';

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.mod = 'empty'
    } else if (this.password.length < 8) {
      this.mod = 'short'
      this.mod = 'weak'
    } else if (
      this.hasLetters() &&
      this.hasDigit()&&
      this.hasSymbols()
    ) {
      this.mod = 'strong';
    }else if (
      (this.hasLetters() && this.hasDigit()) ||
      (this.hasLetters() &&
      this.hasSymbols()) ||
      (this.hasDigit() &&
      this.hasSymbols())
    ){
      this.mod = 'middle'
    }else{
      this.mod = 'weak'
    }
  }

  hasLetters():boolean{
    return this.password.match(/[a-zA-Z]/) !== null;
  }
  hasDigit():boolean{
    return this.password.match(/[0-9]/) !== null;
  }
  hasSymbols():boolean{
    return   this.password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/) !== null;
  }
} 

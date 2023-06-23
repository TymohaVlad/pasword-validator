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
      this.hasLeters() &&
      this.password.match(/[0-9]/) &&
      this.password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
    ) {
      this.mod = 'strong';
    }else if (
      (this.hasLeters() && this.password.match(/[0-9]/)) ||
      (this.hasLeters() &&
        this.password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) ||
      (this.password.match(/[0-9]/) &&
        this.password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/))
    ){
      this.mod = 'middle'
    }else{
      this.mod = 'weak'
    }
  }

  hasLeters():boolean{
    return this.password.match(/[a-zA-Z]/) !== null
  }
} 

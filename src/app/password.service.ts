import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  getStrength(password: string): string {
    if (password.length === 0) {
      return 'empty';
    } else if (password.length < 8) {
      return 'short';
    } else if (
      this.hasLetters(password) &&
      this.hasDigit(password) &&
      this.hasSymbols(password)
    ) {
      return 'strong';
    } else if (
      (this.hasLetters(password) && this.hasDigit(password)) ||
      (this.hasLetters(password) && this.hasSymbols(password)) ||
      (this.hasDigit(password) && this.hasSymbols(password))
    ) {
      return 'middle';
    } else {
      return 'weak';
    }
  }
  private hasLetters(password: string): boolean {
    return password.match(/[a-zA-Z]/) !== null;
  }
  private hasDigit(password: string): boolean {
    return password.match(/[0-9]/) !== null;
  }
  private hasSymbols(password: string): boolean {
    return password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/) !== null;
  }
}

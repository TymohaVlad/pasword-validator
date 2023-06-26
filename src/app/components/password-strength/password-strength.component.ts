import { Component, OnInit } from '@angular/core';
import { PasswordService } from './../../password.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent implements OnInit {

  password: FormControl;
  mod: string = 'empty';

  constructor(private passwordService: PasswordService){
    this.password  = new FormControl<string>('')
  }

  ngOnInit(): void {
    this.password.valueChanges.subscribe(value=>{
      this.mod = this.passwordService.getStrength(value)
    })
  }

} 

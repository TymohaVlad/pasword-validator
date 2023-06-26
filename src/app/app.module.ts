import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {PasswordStrengthComponent} from './components/password-strength/password-strength.component'
import { PasswordIndicatorComponent } from './components/password-indicator/password-indicator.component';
@NgModule({
  declarations: [
    AppComponent,
    PasswordIndicatorComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

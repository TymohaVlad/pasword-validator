import { Component, Input } from "@angular/core";

@Component({
    selector: 'password-indicator',
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.css'],
})
export class PasswordIndicatorComponent{

    @Input()
    mod  = ''
}
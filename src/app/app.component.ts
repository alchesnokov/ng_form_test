import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import {group} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  testForm: FormGroup;
  // url: string;
  // name: string;
  // email: string;
  // phone: number;
  // password: string;
  // confirmPassword: string;

  constructor (formBuilder: FormBuilder) {
    this.testForm = formBuilder.group(
      {
        'url': [null, Validators.required],
        'name': [null, [Validators.required, Validators.pattern(/[А-я]/)]],
        'email': [null, [Validators.required, Validators.email]],
        'phone': [null, [Validators.required]],
        'password': [null, [Validators.required, Validators.minLength(6)]],
        'confirmPassword': [null, [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  alert: string = 'Поле заполнено неверно';

  // private passwordEqual() {
  //   if (this.testForm === group.get('confirmPassword').value) {
  //     return null
  //   } else {this.alert}
  // }

}

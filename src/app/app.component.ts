import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  testForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.testForm = fb.group(
      {
        'url': [null, Validators.required],
        'name': [null, [Validators.required, Validators.pattern(/[А-я]/)]],
        'email': [null, [Validators.required, Validators.email]],
        'phone': [null, [Validators.required, Validators.pattern('[0-9]+')]],
        'gender': [null, [Validators.required]],
        'password': [null, [Validators.required, Validators.minLength(6)]],
        'confirmPassword': [null, [Validators.required, Validators.minLength(6)]]
      }, {validator: this.equalPassword}
    )
  }

  error: string = 'Поле заполнено неверно';

  equalPassword(ac: AbstractControl) {
    let password = ac.get('password').value;
    let confirmPassword = ac.get('confirmPassword').value;
    if (password != confirmPassword) {
      ac.get('confirmPassword').setErrors({equalPassword: true})
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:FormGroup;

  isValid(controlName){
    return this.user.get(controlName).invalid && this.user.get(controlName).touched;
  }

  confirmPass(control: AbstractControl): {[key: string]: any} | null {
    if (control && (control.value !== null || control.value !== undefined)) {
      const repeatPass = control.value;
      const passControl = control.root.get('password');
      if (passControl){
        const password = passControl.value;
        if (password !== repeatPass || password === '') {
          return {isError: true}
        }
      }
    }
    return null;
  }

  constructor(private _register: RegistrationService) {
  }

  ngOnInit() {
    this.user = new FormGroup({
    userId: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    userName: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6)]),
    verifyPassword: new FormControl('',[this.confirmPass]),
    email: new FormControl('', [ Validators.required ]),
    });
    this.user.controls.password.valueChanges
    .subscribe(x => this.user.controls.verifyPassword.updateValueAndValidity());
  }
  onSubmit(){
    console.log(this.user.value);
    const body = {
      userId: this.user.value.userId,
      userName: this.user.value.userName,
      email: this.user.value.email,
      password: this.user.value.password
    }
    console.log(body);
    this._register.register(body).subscribe(
      data => {this.successMessage = 'Registration successful.'},
      error => {this.successMessage = 'Something went wrong.';
      console.log(error);}
    );
  }
}

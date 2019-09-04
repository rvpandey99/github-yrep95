import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:FormGroup;
  onSubmit(){
    
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
  constructor() {
  }

  ngOnInit() {
    this.user = new FormGroup({
    userId: new FormControl('', [ Validators.required ]),
    userName: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    verifyPassword: new FormControl('',[this.confirmPass]),
    email: new FormControl('', [ Validators.required ]),
    });
    this.user.controls.password.valueChanges
    .subscribe(x => this.user.controls.verifyPassword.updateValueAndValidity());
  }

}

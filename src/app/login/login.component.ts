import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:FormGroup;

  isValid(controlName){
    return this.user.get(controlName).invalid && this.user.get(controlName).touched;
  }
  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
    userId: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6)]),
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  isValid(controlName){
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }
  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
    userId: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6)]),
    });
  }
  
  onSubmit(){
    const body = {
      userId: this.loginForm.value.userId,
      password: this.loginForm.value.password
    }
    this._auth.login(body).subscribe(
      data => {this.errorMessage = 'Something went wrong.'},
      error => {this.successMessage = `Logged in successfully. Your token is` + error.text;
      console.log(error);}
    );
  }

}

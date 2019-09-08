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
  loading = false;

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
    if(this.loginForm.valid){
      this.loading = true;
      this._auth.login(body).subscribe(
        data => {
          this.successMessage = 'Logged in successfully. Welcome ' + data.userName;
          localStorage.setItem('userToken',data.token.toString());
          this.loading = false;
        },
        error => {
          this.errorMessage = error.error || 'Something went wrong.';
          this.loading = false;
        // console.log(error.error);
        }
      );
    }
  }
}

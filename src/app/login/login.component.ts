import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(
    private _auth: AuthService,
    private _router: Router, 
    private _activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
    userId: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(8)]),
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
          localStorage.setItem('token',data.token.toString());
          localStorage.setItem('userName',data.userName.toString());
          this.loading = false;
          this._router.navigate(['home']);
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

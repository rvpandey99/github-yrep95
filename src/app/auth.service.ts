import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) { }

  register(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/register',body,{observe:'body'});
  }

  login(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/login',body,{observe:'body'});
  }

}
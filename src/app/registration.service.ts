import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  register(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/register',body,{observe:'body'});
  }

}
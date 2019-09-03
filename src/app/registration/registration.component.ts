import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user = new FormGroup({
    userId: new FormControl('',  [ Validators.required ]),
    userName: new FormControl('',  [ Validators.required ]),
    password: new FormControl('',  [ Validators.required ]),
    verifyPassword: new FormControl('',  [ Validators.required ]),
    email: new FormControl('',  [ Validators.required ]),
  });

  onSubmit(){
    
  }

  constructor() { }

  ngOnInit() {
  }

}

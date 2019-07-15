import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthResponseData, AuthService} from "../auth.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  error: string = null;
  authForm: FormGroup;

  constructor(private router: Router,
  private authService: AuthService
) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      username : new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }


  onSubmit(form) {
    if (this.authForm.valid) {

      const username = form.username;
      const password = form.password;
      let authObs: Observable<AuthResponseData>;
      authObs = this.authService.signInUser(username, password);

      authObs.subscribe(
        resData => {
          this.error = null;
        },
        errorMessage => {
          this.error = errorMessage;
        }
      );
      this.authForm.reset();
    }

    this.authForm.reset();
  }
}


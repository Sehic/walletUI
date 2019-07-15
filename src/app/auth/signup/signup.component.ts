import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string = null;
  signUpForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username : new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }


  onSubmit(form) {
    if (this.signUpForm.valid) {

      const username = form.username;
      const password = form.password;
      const firstName = form.firstName;
      const lastName = form.lastName;
      this.authService.signUpUser(username, password, firstName, lastName).subscribe(
        resData => {
          this.error = null;
        },
        errorMessage => {
          this.error = errorMessage;
        }, () => {
          this.router.navigateByUrl('/signin');
        }
      );
      this.signUpForm.reset();
    }

    this.signUpForm.reset();
  }

}

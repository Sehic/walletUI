import {Injectable} from '@angular/core';
import {ConfigService} from '../config/config.service';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";


export interface AuthResponseData {
  tokenType: string;
  accessToken: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  host = this.config.getApiUrl();


  constructor(private config: ConfigService, private http: HttpClient, private router: Router) {
  }


  signInUser(username: string, password: string) {

    return this.http
      .post<AuthResponseData>(
        this.host + '/api/auth/signin',
        {
          username: username,
          password: password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            username,
            resData.accessToken
          );
        })
      );
  }

  signUpUser(username: string, password: string, firstName: string, lastName: string) {
    return this.http
      .post(
        this.host + '/api/auth/signup',
        {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.router.navigateByUrl("/signin")
        })
      );
  }

  private handleAuthentication(
    username: string,
    accessToken: string
  ) {
    localStorage.setItem("auth_token", accessToken);
    localStorage.setItem("username", username);
    this.router.navigate(['expenses']);
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes)
    let errorMessage = 'Invalid credentials!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This username exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This username does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  public getToken(): string{
    return localStorage.getItem("auth_token");
  }

  public isAuthenticated(): boolean{
    if(this.getToken() != null)
      return true;
    return false;
  }

  logout() {
      localStorage.clear();
      this.router.navigate(['signin']);
  }

}

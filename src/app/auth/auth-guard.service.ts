import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  state: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.state = this.auth.isAuthenticated();
    if (localStorage.getItem('auth_token') === null) {
      this.router.navigate(['/signin']);
    }
    return this.state;
  }

}

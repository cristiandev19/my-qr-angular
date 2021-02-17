import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authSrv: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('hola1', this.authSrv.isLoggedIn())
    console.log('hola2', this.authSrv.haveToken())
    if (this.authSrv.isLoggedIn() && this.authSrv.haveToken()) {
      this.router.navigate(['/admin/principal']);
      // return false;
    } else {
      this.authSrv.logout();
    }
    return true;
  }
}

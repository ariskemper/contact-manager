import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { NbAuthService } from '@nebular/auth'
import { tap } from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: NbAuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['login'])
          }
        })
      )
  }
}

import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { NbAuthJWTToken, NbAuthService, NbTokenStorage} from '@nebular/auth'
import { environment } from '../../../environments/environment'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: NbAuthService, private tokenStorage: NbTokenStorage) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    this.authService.getToken().subscribe((jwtToken: NbAuthJWTToken) => {
      const isApiUrl = request.url.startsWith(environment.apiUrl);
      if (this.authService.isAuthenticated()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${jwtToken.getValue()}`
          }
        })
      }
    })
    return next.handle(request)
  }
}

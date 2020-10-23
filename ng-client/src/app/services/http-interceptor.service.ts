import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private injector: Injector,
    private service: AuthService
  ) { }

  intercept(req, next) {
    let tokenReq = req.clone({
      setHeaders: {
        authtoken: '' + this.service.loadToken()
      }
    });
    return next.handle(tokenReq);
  }
}

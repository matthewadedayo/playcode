import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DemoHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (true) { // e.g. if token exists, otherwise use incomming request.
      return next.handle(req.clone({
        setHeaders: {
          AuthenticationToken: localStorage.getItem('TOKEN'),
          Tenant: localStorage.getItem('TENANT')
        }
      }));
    } else {
      return next.handle(req);
    }
  }

}



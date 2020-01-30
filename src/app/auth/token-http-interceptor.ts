import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth-service';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  public isRefreshing = false;
  public refreshTokenSubject;

  constructor(public authService: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.getJwtToken()) {
      req = this.addToken(req, this.authService.getJwtToken());
    }

    // @ts-ignore
    return next.handle(req).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        return this.handleError401(req, next);
      } else {
        return throwError(err);
      }
    }));
  }


  /*
   * If Token is wrong (UnAuthorized HttpError), refresh and try again
   */
  private handleError401(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
          switchMap( (token: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.jwt);
            return next.handle(this.addToken(req, token.jwt));
          })
      );

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(req, jwt.toString()));
        })
      );
    }
  }


  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }


}



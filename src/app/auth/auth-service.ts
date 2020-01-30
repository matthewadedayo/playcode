import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Config} from './config';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Token} from './token';


export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private token: Token;
  private loggedUser: string;


  // AuthApi@login(), AuthApi@logout(), AuthApi@refreshToken()


  constructor(private http: HttpClient) {

  }

  login(user: {user_name, password}): Observable<boolean> {
    return this.http.post<any>(`${Config.apiUrl}/AuthApi@login()`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.user_name, tokens)),
        mapTo(true),
        catchError(err => {
          alert(err.toString());
          return of(false);
        })
      );
  }

  logout() {
    return this.http.post<any>(`${Config.apiUrl}/AuthApi@logout()`, {refreshToken: this.getRefreshToken()})
      .pipe(
        tap(_ => this.doLogoutUser()),
        mapTo(true),
        catchError(err => {
          alert(err.toString());
          return of(false);
        })
      );
  }

  isGuest() {
    return !!this.loggedUser;
  }

  refreshToken() {
    return this.http.post<any>(`${Config.apiUrl}/AuthApi@refreshToken()`, {refreshToken: this.getRefreshToken()})
      .pipe(
        tap(tokens => this.storeTokens(tokens)),
        mapTo(true),
        catchError(err => {
          alert(err.toString());
          return of(false);
        })
      );
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }



  private doLoginUser(username: string, tokens: Token) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  private doLogoutUser() {
    this.loggedUser = null;
    this.clearTokens();
  }
  private getRefreshToken() {
    return this.token.refreshToken;
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }
  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }
  private clearTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }


}

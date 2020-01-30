import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, private router: Router) {

  }

  canActivate() {
    // if (false) {
    //   this.router.navigate(['login']);
    // }
    return true;
  }


}

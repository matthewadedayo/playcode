import { NgModule } from '@angular/core';
import {AdminGuard} from './guard/admin/admin.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenHttpInterceptor} from './token-http-interceptor';
import {LoginGuard} from './guard/login/login.guard';
import {LoginComponent} from '../pages/auth/login/login.component';
import {AppModule} from '../app.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginGuard,
    AdminGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenHttpInterceptor,
    //   multi: true
    // }
  ],
  imports: [
    RouterModule
  ],
  // imports: [RouterModule.forRoot(
  //   routes,
  //   { enableTracing: true } // <-- debugging purposes only
  //   )],
  // exports: [RouterModule]
})
export class AuthModule { }

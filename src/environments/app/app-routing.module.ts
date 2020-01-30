import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {ForgotPasswordComponent} from './pages/auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './pages/auth/reset-password/reset-password.component';
import {LoginGuard} from './auth/guard/login/login.guard';
import {RegisterWelcomeComponent} from './pages/auth/register-welcome/register-welcome.component';
import {RegisterGenderComponent} from './pages/auth/register-gender/register-gender.component';
import {RegisterPersonalizationComponent} from './pages/auth/register-personalization/register-personalization.component';


const routes: Routes = [


  // No Login Required
  {
    path : '',
    component : SiteLayoutComponent,
    children : [
      { path : '', component : HomepageComponent},
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent},
      { path : 'forgot_password', component : ForgotPasswordComponent},
      { path : 'reset_password', component : ResetPasswordComponent},
    ]
  },

  // Login Required
  {
    path : '',
    component : SiteLayoutComponent,
    // canActivate: [LoginGuard],
    children : [
      { path : 'register/welcome', component : RegisterWelcomeComponent},
      { path : 'register/gender', component : RegisterGenderComponent},
      { path : 'register/personalize', component : RegisterPersonalizationComponent},
    ]
  },



  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

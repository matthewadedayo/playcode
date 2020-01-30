import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FooterComponent } from './layouts/inc/footer/footer.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import { HeaderTemplateComponent } from './layouts/inc/header-template/header-template.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { AuthMenuComponent } from './pages/inc/auth-menu/auth-menu.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { RegisterWelcomeComponent } from './pages/auth/register-welcome/register-welcome.component';
import {AuthModule} from './auth/auth.module';
import { RegisterGenderComponent } from './pages/auth/register-gender/register-gender.component';
import { ProfileComponent } from './pages/auth/profile/profile.component';
import { RegisterPersonalizationComponent } from './pages/auth/register-personalization/register-personalization.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SiteLayoutComponent,
    HeaderTemplateComponent,
    ForgotPasswordComponent,
    AuthMenuComponent,
    ResetPasswordComponent,
    RegisterWelcomeComponent,
    RegisterGenderComponent,
    ProfileComponent,
    RegisterPersonalizationComponent
  ],
  imports: [
    BrowserModule,
    // AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    AuthMenuComponent,
    HeaderTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

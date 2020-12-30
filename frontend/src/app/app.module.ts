import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './Posts/create-post/create-post.component';
import { DetailsPostComponent } from './Posts/details-post/details-post.component';
import { GetPostComponent } from './Posts/get-post/get-post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGetComponent } from './Posts/admin-get/admin-get.component';
// import { MyLibModule } from 'my-lib';
// import { MyLibComponent } from 'my-lib/lib/my-lib.component';

@NgModule({
  declarations: [
    AppComponent,
    // MyLibComponent,
    CreatePostComponent,
    DetailsPostComponent,
    GetPostComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AdminGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MyLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

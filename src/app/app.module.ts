// Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// Services
import { ApiService } from './api.service'


// Components
import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoggedRightPartNavBarComponent } from './navbar/user-logged-right-part-nav-bar/user-logged-right-part-nav-bar.component';
import { VisitorRightPartNavBarComponent } from './navbar/visitor-right-part-nav-bar/visitor-right-part-nav-bar.component';
import { SignInFormComponent } from './sign-up/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    IndexComponent,
    NavBarComponent,
    SignUpComponent,
    UserLoggedRightPartNavBarComponent,
    VisitorRightPartNavBarComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {path: "index", component:IndexComponent},
      {path: "register", component:SignUpComponent}
    ])
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

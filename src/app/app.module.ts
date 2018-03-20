import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { BtnGroupSearchbarComponent } from './navbar/btn-group-searchbar/btn-group-searchbar.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserLoggedRightPartNavBarComponent } from './navbar/user-logged-right-part-nav-bar/user-logged-right-part-nav-bar.component';
import { VisitorRightPartNavBarComponent } from './navbar/visitor-right-part-nav-bar/visitor-right-part-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnGroupSearchbarComponent,
    FileuploaderComponent,
    HeaderComponent,
    IndexComponent,
    NavBarComponent,
    SignInComponent,
    UserLoggedRightPartNavBarComponent,
    VisitorRightPartNavBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "index", component:IndexComponent},
      {path: "SignIn", component:SignInComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

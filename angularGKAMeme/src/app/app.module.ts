import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserLoggedRightPartNavBarComponent } from './navbar/user-logged-right-part-nav-bar/user-logged-right-part-nav-bar.component';
import { VisitorRightPartNavBarComponent } from './navbar/visitor-right-part-nav-bar/visitor-right-part-nav-bar.component';
import { BtnGroupSearchbarComponent } from './navbar/btn-group-searchbar/btn-group-searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    NavBarComponent,
    IndexComponent,
    SignInComponent,
    UserLoggedRightPartNavBarComponent,
    VisitorRightPartNavBarComponent,
    BtnGroupSearchbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "index", component:IndexComponent},
      {path: "SignIn", component:SignInComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

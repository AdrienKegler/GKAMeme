import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { IndexComponent } from './index/index.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserLoggedRightPartNavBarComponent } from './user-logged-right-part-nav-bar/user-logged-right-part-nav-bar.component';
import { VisitorRightPartNavBarComponent } from './visitor-right-part-nav-bar/visitor-right-part-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    GalleryComponent,
    MainNavBarComponent,
    IndexComponent,
    SignInComponent,
    UserLoggedRightPartNavBarComponent,
    VisitorRightPartNavBarComponent
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

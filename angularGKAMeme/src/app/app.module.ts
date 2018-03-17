import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { IndexComponent } from './index/index.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    FileuploaderComponent,
    HeaderComponent,
    GalleryComponent,
    MainNavBarComponent,
    IndexComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
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

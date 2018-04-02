import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from '../../api.service'
import {serialize} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})




export class SignInFormComponent implements OnInit {

  email:string;
  name:string;
  firstName:string;
  birthday:string;
  password:string;
  confirmPassword:string;

  constructor(private http: HttpClient, private apiConfig: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.sendRegisterForm();
  };


  sendRegisterForm() {
    this.http.post(this.apiConfig.apiRoot + 'user/register', {
      email: this.email,
      name: this.name,
      firstName: this.firstName,
      birthday: this.birthday,
      password: this.password
    }, {})
      .subscribe(
        (data:any)=>{
          console.log(data);
        }
      )
  }
}

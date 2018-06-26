import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title = <string> 'Sign up !';

  constructor() {
  }

  ngOnInit() {
  }

}

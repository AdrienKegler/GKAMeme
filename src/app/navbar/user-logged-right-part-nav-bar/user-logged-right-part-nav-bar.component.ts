import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-logged-right-part-nav-bar',
  templateUrl: './user-logged-right-part-nav-bar.component.html',
  styleUrls: ['./user-logged-right-part-nav-bar.component.css']
})
export class UserLoggedRightPartNavBarComponent implements OnInit {

  user = {
    avatar: <string> "/assets/Pictures/GKM icon.png",
    username: <string> "ETERN4L DARKNES"
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  logged = <boolean> true;
  faUserDropdown = <string> "Memers" ;

  constructor() { }

  ngOnInit() {
  }

  updateFaUserDropdown(newFaUserDropdownText){
    this.faUserDropdown = newFaUserDropdownText;
  }

}

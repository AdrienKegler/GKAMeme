import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  logged = <boolean> false;
  faUserDropdown = <string> "Memers" ;

  constructor() { }

  ngOnInit() {
  }

  updateFaUserDropdown(newFaUserDropdownText){
    this.faUserDropdown = newFaUserDropdownText;
  }

}

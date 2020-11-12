import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = localStorage.getItem('authtoken')
  loggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (this.user != null || this.user != undefined) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

}

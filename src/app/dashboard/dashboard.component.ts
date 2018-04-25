import { Component } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthenticationService } from './../services/auth.service';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  currentUser;

  constructor(
    // private router: Router,
    private authenticationService: AuthenticationService

  ) {
    // data call from lgin
    this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.currentUser)
    //  console.log(this.currentUser.first_name);
  }

  signout() {
    this.authenticationService.logout();
  }



}

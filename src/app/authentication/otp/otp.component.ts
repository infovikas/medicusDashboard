import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
  }
  // OTP Generation and verification
  generateOTP(f: NgForm) {
    this.httpService.requestOTP(f.value.mobile)
      .subscribe(
        (data) => {
          console.log(data);
          window.localStorage.setItem('Request_id', JSON.stringify(data));
        }
      );
  }

  verifyOTP(otp: NgForm) {
    this.httpService.confirmOTP(otp.value)
      .subscribe(
        (data) => {
          console.log(data);
          window.localStorage.setItem('JWT', JSON.stringify(data));
        }
      );
    window.localStorage.removeItem('Request_id');
  }

  redirectSingin() {
    this.router.navigateByUrl('/signin');
  }

}

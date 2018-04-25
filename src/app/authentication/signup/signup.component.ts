import { Component, NgModule } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {



  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
  }

  onSubmit(f: NgForm) {
    // console.log(f.value);
    this.httpService.sendData(f.value)
      .subscribe(
        (data) => {
          console.log(data);
          window.localStorage.setItem('JWT', JSON.stringify(data['JWT']));
          window.localStorage.setItem('currentUser', JSON.stringify(data['data']));
        });
    this.router.navigateByUrl('/');
  }



  redirectSingin() {
    this.router.navigateByUrl('/signin');
  }



}

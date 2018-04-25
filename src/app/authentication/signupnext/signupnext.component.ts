import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupnext',
  templateUrl: './signupnext.component.html',
  styleUrls: ['./signupnext.component.css']
})
export class SignupnextComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }
  // onSubmit(f_doc: NgForm) {
  //   this.httpService.docData(f_doc.value)
  //     .subscribe(
  //       (data) => console.log(data)
  //     );
  //   this.router.navigateByUrl('/dashboard/home');
  // }

}

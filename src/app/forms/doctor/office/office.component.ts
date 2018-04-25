import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(private http: HttpService) { }


  createOffice(data) {
    console.log(data);
    this.http.createOffice(data).subscribe(result => console.log(result));
  }


  ngOnInit() {
  }

}

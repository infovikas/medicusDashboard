import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OfficeComponent } from '../forms/doctor/office/office.component';
import { SlotComponent } from './../forms/doctor/slot/slot.component';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  slots = [
    { day: 'Monday', startTime: '10:00', endTime: '12:30', avgTime: '10 min' },
    { day: 'Tuesday', startTime: '11:00', endTime: '02:00', avgTime: '10 min' },
    // { day: 'Wedenesday', startTime: 'hh:mm', endTime: 'hh:mm', avgTime: 'mm' },
    // { day: 'Thursday', startTime: 'hh:mm', endTime: 'hh:mm', avgTime: 'mm' },
    // { day: 'Friday', startTime: 'hh:mm', endTime: 'hh:mm', avgTime: 'mm' },
    // { day: 'Satuarday', startTime: 'hh:mm', endTime: 'hh:mm', avgTime: 'mm' },
    // { day: 'Sunday', startTime: 'hh:mm', endTime: 'hh:mm', avgTime: 'mm' }
  ]
  offices = [
    { officeName: 'AIIMS', street: 'AIIMS', city: 'Dehli', state: 'Dehli', country: 'India', zip: 214356 }
  ];

  currentUser;
  search;
  // Progresser content
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  // End Here

  // folders = [
  //   {
  //     name: 'Photos',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Recipes',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Work',
  //     updated: new Date('1/28/16'),
  //   }
  // ];

  constructor(public dialog: MatDialog, private httpService: HttpService) {
    this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    // this.search = this.httpService.sp
  }

  openModal() {
    let modelRef = this.dialog.open(OfficeComponent, {
      height: '400px',
      width: '600px'
    });
  }
  slotModal() {
    let modelRef = this.dialog.open(SlotComponent, {
      height: '400px',
      width: '600px'
    });
  }

  ngOnInit() {
    this.httpService.getOffice().subscribe(result => console.log(result));
  }



}

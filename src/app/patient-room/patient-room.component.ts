import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrecreptionComponent } from './../forms/doctor/precreption/precreption.component';

@Component({
  selector: 'app-patient-room',
  templateUrl: './patient-room.component.html',
  styleUrls: ['./patient-room.component.css']
})
export class PatientRoomComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openModal() {
    let modelRef = this.dialog.open(PrecreptionComponent, {
      height: '400px',
      width: '850px'
    });
  }
  appointmentDone() {

  }
  // reschedule() {

  // }
  cancel() {

  }
}

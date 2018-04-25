import { HttpService } from './../services/http.service';
import { CancelAppointComponent } from './../forms/doctor/cancel-appoint/cancel-appoint.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments;

  selectedDate: any;
  currentDate = moment().format('LL');
  constructor(private router: Router, public dialog: MatDialog, private httpservice: HttpService) {
    this.httpservice.getApointments().subscribe(result => { console.log(result); this.appointments = result });
    console.log(this.appointments);
  }
  addEvent(event, data) {
    this.currentDate = moment(data.value).format('LL');
  }
  ngOnInit() {
  }
  patientClick() {
    // this.router.navigate(['/dashboard/patientRoom']);
  }
  today() {
    this.currentDate = moment().format('LL');
  }
  refresh(): void {
    window.location.reload();
  }
  pauseAppoint() {
    let modelRef = this.dialog.open(CancelAppointComponent, {
      height: '400px',
      width: '600px'
    });
  }
  cnclapt(id) {
    this.httpservice.cncl(id).subscribe(result => {
      // this.router.navigateByUrl('http://localhost:4200/dashboard/appointments');
      window.location.href = 'http://localhost:4200/dashboard/appointments';
      console.log(result)
    })
  }

}

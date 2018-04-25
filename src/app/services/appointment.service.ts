import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { localNetwork } from './../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService {

  constructor(private http: HttpClient, private router: Router) { }

  getAppointmentByDate(data) {
    let body = {
      actor: 'doctor',
      date: {
        start_time: '',
        end_time: '',
        avg_time: '10'
      }
    }
   return this.http.post(`${localNetwork.apiUrl}/api/v1/appointment/get`, body)
      }



}

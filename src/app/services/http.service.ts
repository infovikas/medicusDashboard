import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { localNetwork } from './../../environments/environment';


import { map, catchError, } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


const httpOptions = {
  headers: new HttpHeaders({

    'Content-Type': 'application/json; charset=UTF-8',
    'authorization': 'xxxx.yyyy.zzzz'
  })
};

@Injectable()
export class HttpService {


  constructor(private http: HttpClient) { }
  public id: string;
  private jwtreq;

  sendData(user: any) {
    user.actor = 'doctor';
    const body = JSON.stringify(user);
    return this.http.post(`${localNetwork.apiUrl}/register`, body, httpOptions);
  }

  // docData(user: any) {
  //   let token = JSON.parse(window.localStorage.getItem('JWT')).JWT;
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('Authorization', 'Bearer' + ' ' + token)
  //   this.jwtreq = new RequestOptions({ headers: headers });
  //   user.actor = 'doctor';
  //   const body = JSON.stringify(user);
  //   return this.http.put('http://192.168.0.102:3000/api/v1/register', body, this.jwtreq);
  // }

  // Getting doctor data after login
  getDocInfo() {
    return this.http.get<any>(`${localNetwork.apiUrl}/doctor`);
  }

  // OTP request and response
  requestOTP(user: any) {
    // const body = JSON.stringify(user);
    let body = {
      mobile: user
    }
    console.log(body);
    return this.http.post(`${localNetwork.apiUrl}/login`, body);
  }

  confirmOTP(user: any) {

    let request_id = JSON.parse(window.localStorage.getItem('Request_id')).requestId;
    let body = {
      pin: user,
      requestId: request_id
    }
    console.log(body);
    return this.http.post(`${localNetwork.apiUrl}/verify`, body);
  }
  // to send slots
  slotSend(availability) {
    let token = 'Bearer ' + JSON.parse(window.localStorage.getItem('JWT'));
    console.log(token);
    console.log(JSON.parse(window.localStorage.getItem('currentUser')))
    let head = new HttpHeaders({ authorization: token })
    availability['update_action_type'] = 'update_availlability';
    console.log(availability);
    return this.http.put(`${localNetwork.apiUrl}/doctor`, availability, { headers: head })

  }


  createOffice(data) {
    let token = 'Bearer ' + JSON.parse(window.localStorage.getItem('JWT'));
    let head = new HttpHeaders({ authorization: token })
    return this.http.post(`${localNetwork.apiUrl}/doctor`, data, { headers: head })
  }

  getOffice() {
    let token = 'Bearer ' + JSON.parse(window.localStorage.getItem('JWT'));
    console.log(token);
    let head = new HttpHeaders({ authorization: token })
    return this.http.get(`${localNetwork.apiUrl}/doctor`, { headers: head })
  }
  specl(id) {
    let token = 'Bearer ' + JSON.parse(window.localStorage.getItem('JWT'));
    console.log(token);
    let head = new HttpHeaders({ authorization: token })
    let body = {
      update_action_type: 'specialization',
      spec_id: id
    };

    return this.http.put<any>(`${localNetwork.apiUrl}/doctor`, body, { headers: head })
      .pipe(
        catchError(this.handleError)
      );
  }


  getresponseOTP() {
    return this.http.get<any>(`${localNetwork.apiUrl}/login`)
      .pipe(
        catchError(this.handleError)
      );

  }

  getSpecialization() {
    // return this.http.post(`${localNetwork.apiUrl}/search`)
  }


  getApointments() {
    return this.http.post(`${localNetwork.apiUrl}/appointment/get`,
      {
        "getAllAppointmentsByDoctor": "1",
        "actor": 'doctor'
      })
  }
  cncl(id) {
    return this.http.post(`${localNetwork.apiUrl}/appointment/delete`, { id: id })
  }




  // http response error handling
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}

// https://doct-e2b67.firebaseio.com/
// http://192.168.0.102:3000/api/v1/register

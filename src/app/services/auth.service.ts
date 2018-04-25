
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import * as moment from "moment";

// import 'rxjs/add/operator/do';
// import { shareReplay } from 'rxjs/operators';

// export class User {
//   email: string;
//   password: string;
// }

// @Injectable()
// export class AuthService {

//   constructor(private http: HttpClient) {

//   }

//   login(email: string, password: string) {
//     return this.http.post<User>('http://192.168.0.102/api/v1/login', { email, password })
//       .do(res => this.setSession)
//       .shareReplay();
//   }

//   private setSession(authResult) {
//     const expiresAt = moment().add(authResult.expiresIn, 'second');

//     localStorage.setItem('id_token', authResult.idToken);
//     localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
//   }

//   logout() {
//     localStorage.removeItem("id_token");
//     localStorage.removeItem("expires_at");
//   }

//   public isLoggedIn() {
//     return moment().isBefore(this.getExpiration());
//   }

//   isLoggedOut() {
//     return !this.isLoggedIn();
//   }

//   getExpiration() {
//     const expiration = localStorage.getItem("expires_at");
//     const expiresAt = JSON.parse(expiration);
//     return moment(expiresAt);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { localNetwork } from './../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    login(email: string, password: string) {
        console.log(email, password)
        return this.http.post(`${localNetwork.apiUrl}/login`, { email, password })
            .map((data) => {
                // login successful if there's a jwt token in the response
                console.log(data);
                window.localStorage.setItem('JWT', JSON.stringify(data['JWT']));
                window.localStorage.setItem('currentUser', JSON.stringify(data['data']));

                if (data['JWT'] && data['data']) {
                    return true
                } else {
                    return false
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        window.localStorage.removeItem('currentUser');
        window.localStorage.removeItem('JWT');
        this.router.navigateByUrl('/signin');
        // window.location.reload();

    }
}


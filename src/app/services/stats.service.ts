import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StatsService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("../assets/data.json")
      .map(result => result);
  }

}

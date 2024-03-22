import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quote } from '../model/route/quote';
import { catchError, map, throwError } from 'rxjs';
import { Route } from '@angular/router';
import { TripInfo } from '../model/route/tripInfo';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private http: HttpClient = inject(HttpClient);
  private BASE_URL: string = "https://api.ember.to/v1/";
  private QUOTES: string = "quotes/";
  private TRIPS: string = "trips/"
  errorMessage: string | null = null;
  currentTripId: string = '';


  constructor() { }

  getAllTrips() {
    // get curernt time and current end of day
    let startTime = new Date();
    // set startTime 2h earlier then current time, so exp arrival time can be tested
    startTime.setTime(startTime.getTime() + (-2*60*60*1000));
    let endOfDay = new Date();
    endOfDay.setUTCHours(23,59,59,999);
    // set up the queryParams
    let queryParams: HttpParams = new HttpParams()
    queryParams = queryParams.set("departure_date_from", startTime.toISOString());
    queryParams = queryParams.set("departure_date_to", endOfDay.toISOString());
    queryParams = queryParams.set("departure_date_to", endOfDay.toISOString());
    queryParams = queryParams.set("origin", 13);
    queryParams = queryParams.set("destination", 42);
    // sending GET request to fetch trips
    return this.http.get<{[key: string]: Quote[]}>(this.BASE_URL + this.QUOTES, {params: queryParams});
  }

  // retrieving one trip_uid
  getOneTripUid() {
    return this.getAllTrips()
    .pipe(map ((resp) => {
      // getting the first quote trip_uid
      let quotes: Quote[] = resp["quotes"];
      return quotes[0].legs[0].trip_uid;
    }),
    catchError((err) => {
      this.errorMessage = err.message;
      return throwError(() => err)
    }))
  }

  // fetching trip info of given trip_uid
  getTripInfo(id: string) {
    return this.http.get<TripInfo>(this.BASE_URL + this.TRIPS + id);
  }
}

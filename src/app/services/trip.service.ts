import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quote } from '../model/quote';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private http: HttpClient = inject(HttpClient);
  private BASE_URL: string = "https://api.ember.to/v1/";
  private QUOTES: string = "quotes/";
  errorMessage: string | null = null;


  constructor() { }

  getAllTrips() {
    // get curernt time and current end of day
    let currentTime = new Date();
    let endOfDay = new Date();
    endOfDay.setUTCHours(23,59,59,999);
    // set up the queryParams
    let queryParams: HttpParams = new HttpParams()
    queryParams = queryParams.set("departure_date_from", currentTime.toISOString());
    queryParams = queryParams.set("departure_date_to", endOfDay.toISOString());
    queryParams = queryParams.set("departure_date_to", endOfDay.toISOString());
    queryParams = queryParams.set("origin", 13);
    queryParams = queryParams.set("destination", 42);
    // sending GET request to fetch trips
    return this.http.get<{[key: string]: Quote[]}>(this.BASE_URL + this.QUOTES, {params: queryParams});
  }

  getOneTripUid() {
    return this.getAllTrips()
    .pipe(map ((resp) => {
      // getting the lalst quote trip_uid
      let quotes: Quote[] = resp["quotes"];
      return quotes[quotes.length - 1].legs[0].trip_uid;
    }),
    catchError((err) => {
      this.errorMessage = err.message;
      return throwError(() => err)
    }))
  }
}

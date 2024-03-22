import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private http: HttpClient = inject(HttpClient);
  private BASE_URL: string = "https://api.ember.to/v1/";
  private QUOTES: string = "quotes/";


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
    this.http.get(this.BASE_URL + this.QUOTES, {params: queryParams}).subscribe((response) => {
      console.log(response);
    })
  }
}

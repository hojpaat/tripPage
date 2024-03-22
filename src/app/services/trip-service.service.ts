import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  http: HttpClient = inject(HttpClient);

  constructor() { }
}

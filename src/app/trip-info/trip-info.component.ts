import { Component, inject } from '@angular/core';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {

  tripService: TripService = inject(TripService);

  ngOnInit() {
    this.tripService.getAllTrips()
  }

}

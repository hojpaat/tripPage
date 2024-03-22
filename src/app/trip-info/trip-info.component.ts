import { Component, inject } from '@angular/core';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {

  tripService: TripService = inject(TripService);
  tripId!: string | null;

  ngOnInit() {
    this.tripService.getAllTrips()
    this.tripService.getOneTripUid()
    .subscribe({next: (id) => {
      this.tripId = id;
    }});
  }

}

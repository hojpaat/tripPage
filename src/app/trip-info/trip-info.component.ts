import { Component, inject } from '@angular/core';
import { TripService } from '../services/trip.service';
import { TripInfo } from '../model/route/tripInfo';
import { Vehicle } from '../model/vehicle/vehicle';
import { Description } from '../model/route/description';
import { Route } from '@angular/router';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {

  tripService: TripService = inject(TripService);
  tripId!: string | null;
  tripInfo: TripInfo | null = null;
  currentRoutes: Route[] = [];
  currentVehicle!: Vehicle | null;
  currentDescription!: Description | null;

  ngOnInit() {
    this.tripService.getOneTripUid()
    .subscribe({next: (id) => {
      this.tripId = id;
      console.log(this.tripId);
      this.getTripInfo(this.tripId);
      
    }});
  }


  getTripInfo(id: string) {
    this.tripService.getTripInfo(id)
    .subscribe({next: (tripInfo) => {
      this.tripInfo = tripInfo;
      this.processTripInfo(this.tripInfo);
    }})
    
  }

  processTripInfo(trip: TripInfo) {
    this.currentDescription = trip.description;
    this.currentRoutes = trip.route;
    this.currentVehicle = trip.vehicle;
  }

}

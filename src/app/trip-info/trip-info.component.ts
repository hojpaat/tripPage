import { Component, inject } from '@angular/core';
import { TripService } from '../services/trip.service';
import { TripInfo } from '../model/route/tripInfo';
import { Vehicle } from '../model/vehicle/vehicle';
import { Description } from '../model/route/description';
import { RouteInfo } from '../model/route/routeInfo';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {

  tripService: TripService = inject(TripService);
  tripId!: string | null;
  tripInfo: TripInfo | null = null;
  currentRoutes: RouteInfo[] = [];
  currentVehicle!: Vehicle | null;
  currentDescription!: Description | null;
  test:string = "this works";
  isWheelchair: boolean = false;
  isBike: boolean = false;
  isWifi: boolean = false;
  isToilet: boolean = false;
  isCanceled: boolean = false;

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
    this.isBike = this.currentVehicle.bicycle > 0;
    this.isWheelchair = this.currentVehicle.wheelchair > 0;
    this.isWifi = this.currentVehicle.has_wifi;
    this.isToilet = this.currentVehicle.has_toilet;
    this.isCanceled = this.currentDescription.is_cancelled;

    
  }

}

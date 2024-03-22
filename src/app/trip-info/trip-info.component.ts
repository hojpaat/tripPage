import { Component, inject } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Route } from '@angular/router';
import { TripInfo } from '../model/route/tripInfo';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.component.html',
  styleUrl: './trip-info.component.css'
})
export class TripInfoComponent {

  tripService: TripService = inject(TripService);
  tripId!: string | null;
  tripInfo: TripInfo | null = null;

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
      console.log("these are the trips");
      
      console.log(this.tripInfo);
    }})
    
  }

}

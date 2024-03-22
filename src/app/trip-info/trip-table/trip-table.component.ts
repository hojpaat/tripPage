import { Component, Input } from '@angular/core';
import { RouteInfo } from '../../model/route/routeInfo';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrl: './trip-table.component.css'
})
export class TripTableComponent {

  @Input() currentRoutes: RouteInfo[] = [];
  // filteredStops: Stop[] = [];


  ngAfterViewInit() {

  }

  onValueChange(event: any) {
    // this.filteredStops = this.filterStopsByName(event.target.value);
    // console.log(this.filteredStops);
    
  }

}

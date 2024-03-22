import { Component, Input } from '@angular/core';
import { RouteInfo } from '../../model/route/routeInfo';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrl: './trip-table.component.css'
})
export class TripTableComponent {

  @Input() currentRoutes: RouteInfo[] = [];
  filteredRoutes: RouteInfo[] = [];

  ngOnInit() {
    this.filteredRoutes = this.filterRoutesByStopName('');

  }

  onValueChange(event: any) {
    this.filteredRoutes = this.filterRoutesByStopName(event.target.value);
  }

  filterRoutesByStopName(filter: string): RouteInfo[] {
    if(this.currentRoutes.length == 0 || filter == '') {
      return this.currentRoutes;
    }
    return this.currentRoutes.filter((route: RouteInfo) => {
      return route.location.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    })
  }

}

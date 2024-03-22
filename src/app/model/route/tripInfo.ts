import { Route } from "@angular/router";
import { Vehicle } from "../vehicle/vehicle";
import { Description } from "./description";

export interface TripInfo {
    route: Route[];
    vehicle: Vehicle;
    description: Description;
}
import { Vehicle } from "../vehicle/vehicle";
import { Description } from "./description";
import { RouteInfo } from "./routeInfo";

export interface TripInfo {
    route: RouteInfo[];
    vehicle: Vehicle;
    description: Description;
}
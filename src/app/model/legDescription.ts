import { Amenities } from "./amenities";

export interface LegDescription {
    amenities: Amenities;
    colour: string;
    destination_board: string;
    number_plate: string;
    operator: string;
    vehicle_type: string;
}
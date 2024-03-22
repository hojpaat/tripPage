import { Availability } from "./availability";
import { Leg } from "./leg";
import { Prices } from "./prices";

export interface Quote {
    availability: Availability;
    prices: Prices;
    legs: Leg[];
    bookable: boolean; 
}

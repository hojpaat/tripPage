import { BoardingData } from "./boardingData";
import { LegDescription } from "./legDescription";
import { ScheduleTime } from "./scheduleTime";
import { StopLocation } from "./stopLocation";
import { TripNotes } from "./tripNotes";


export interface Leg {
    trip_uid: string;
    arrival: ScheduleTime;
    boarding_data: BoardingData;
    departure: ScheduleTime;
    description: LegDescription;
    destination: StopLocation;
    origin: StopLocation;
    trip_notes: TripNotes;
    type: string;
    tripType: string;
    addsCapacityForTripUid?: any
}
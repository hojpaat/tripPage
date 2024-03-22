import { ScheduleTime } from "./scheduleTime"

export interface Route {
    id: number
    departure: ScheduleTime
    arrival: ScheduleTime
    location: Location
    allow_boarding: boolean
    allow_drop_off: boolean
    booking_cut_off_mins: number
    pre_booked_only: boolean
    skipped: boolean
    predictions?: any;
  }
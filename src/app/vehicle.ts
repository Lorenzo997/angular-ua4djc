import { Film } from "./film";
import { Person } from "./person";

export interface Vehicle {
    model: string;
    name:string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed:number;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    vehicle_class: string;
    pilots: Person[],
    films: Film[],
    created: string;
    edited: string;
    url: string;
}
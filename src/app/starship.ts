import { Person } from "./person";
import { Film } from "./film";

export interface Starship{
    name:string;
    model:string;
    manufacturer:string;
    cost_in_credits:string;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables:string;
    hyperdrive_rating:string;
    MGLT: number;
    starship_class: string;
    pilots: Person[], 
    films: Film[], 
    created: string;
    edited: string;
    url: string;
}
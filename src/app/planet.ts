import { Person } from "./person";
import { Film } from "./film";

export interface Planet {

    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: Person[],
    films: Film[],
    created: string;
    edited: string;
    url: string;
}
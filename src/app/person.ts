import { Film } from "./film";
import { Species } from "./species";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";

export interface Person {

    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Film[],
    species: Species[],
    vehicles: Vehicle[],
    starships: Starship[],
    created: string;
    edited: string;
    url: string;
}
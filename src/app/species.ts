import { Person } from "./person";
import { Film } from "./film";

export interface Species {

    name: string;
    classification: string;
    designation: string;
    average_height: number;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: number;
    homeworld: string;
    language: string;
    people: Person[],
    films: Film[],
    created: string;
    edited: string;
    url: string;
}
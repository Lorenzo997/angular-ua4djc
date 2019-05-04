import { Person } from "./person";
import { Vehicle } from "./vehicle";
import { Starship } from "./starship";
import { Planet } from "./planet";
import { Species } from "./species";

export interface Film {
    title: string;
    episode_id: number;
    onening_crawl: string;
    director: string;
    producer: string;
    release_data: string;
    characters: Person[];
    planets: Planet[];
    starships: Starship[];
    vehicles: Vehicle[];
    species: Species[];
    created:string;
    edited:string;
    url:string;
}
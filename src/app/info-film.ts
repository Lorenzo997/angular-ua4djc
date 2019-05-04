import { Planet } from "./planet";
import { Person } from "./person";
import { Starship } from "./starship";
import { Vehicle } from "./vehicle";
import { Species } from "./species";

export interface InfoFilm {

    episode_id:number;
    opening_crawl:string;
    director:string;
    producer:string;
    release_date:string;
    characters:Person[];
    planets:Planet[];
    starships:Starship[];
    vehicles:Vehicle[];
    species:Species[];
    created:string;
    edited: string;
    url : string;
}
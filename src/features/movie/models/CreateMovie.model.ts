import type MovieActorModel from "./MovieActor.model";

export default interface CreateMovie{
    title: string;
    dateRelease: string;
    trailer?:string;
    poster?:File | string;
    gendersId?: number[];
    cinesIds?:number[];
    actors?:MovieActorModel[]
}
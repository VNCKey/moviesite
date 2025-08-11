import type MovieActorModel from "./MovieActor.model";

export default interface CreateMovieI {
  titulo: string;
  fechaLanzamiento: string;
  trailer?: string;
  poster?: File | string;
  gendersIds?: number[];
  cinesIds?: number[];
  actors?: MovieActorModel[];
}

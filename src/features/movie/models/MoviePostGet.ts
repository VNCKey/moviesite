import type CineModel from "@/features/cines/models/Cine.model";
import type Gender from "@/features/gender/models/Gender.model";

export default interface MoviesPostGet {
  generos: Gender[];
  cines: CineModel[];
}

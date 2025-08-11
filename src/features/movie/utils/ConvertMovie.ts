import type CreateMovie from "../models/CreateMovie.model";

export default function ConvertMovie(peliculaCreate: CreateMovie) {
  const formData = new FormData();
  formData.append("titulo", peliculaCreate.titulo);
  formData.append("fechaLanzamiento", peliculaCreate.fechaLanzamiento);

  if (peliculaCreate.poster) {
    formData.append("poster", peliculaCreate.poster);
  }

  if (peliculaCreate.trailer) {
    formData.append("trailer", peliculaCreate.trailer);
  }
  formData.append("generosId", JSON.stringify(peliculaCreate.gendersIds ?? []));
  formData.append("cinesIds", JSON.stringify(peliculaCreate.cinesIds ?? []));
  formData.append("actors", JSON.stringify(peliculaCreate.actors ?? []));
  return formData;
}

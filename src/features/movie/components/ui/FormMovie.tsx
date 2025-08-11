import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateMovie from "../../models/CreateMovie.model";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import SelectImg from "@/components/ui/SelectImg";
import Button from "@/components/ui/Button";
import { NavLink } from "react-router";
import MultiSelector from "@/components/ui/MultiSelector";
import type Gender from "@/features/gender/models/Gender.model";
import type MultiSelectorModel from "@/components/model/MultiSelector.model";
import { useState } from "react";
import type CineModel from "@/features/cines/models/Cine.model";
import TypeaheadActors from "./TypeaheadActors";
import type MovieActorModel from "../../models/MovieActor.model";
import MostrarErrores from "@/components/ui/MostrarErrores";

const FormMovie = (props: FormMovieProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateMovie>({
    resolver: yupResolver(validationRules),
    mode: "onChange",
    defaultValues: props.model ?? { titulo: "" }, // name ?
  });

  const currentImg: string | undefined = props.model?.poster
    ? (props.model.poster as string)
    : undefined;

  const mapear = (
    array: { id: number; name: string }[]
  ): MultiSelectorModel[] => {
    return array.map((value) => {
      return { key: value.id, description: value.name };
    });
  };

  const [gendersSelected, setGendersSelected] = useState(
    mapear(props.selectedGenders)
  );
  const [nogendersSelected, setNoGendersSelected] = useState(
    mapear(props.noselectedGenders)
  );

  const [selectedCinemas, setSelectedCinemas] = useState(
    mapear(props.selectedCinemas)
  );
  const [unSelectedCinemas, setUnSelectedCinemas] = useState(
    mapear(props.unSelectedCinemas)
  );

  const [actorsSelected, setActorsSelected] = useState<MovieActorModel[]>(
    props.actorsSelected
  );

  const onSubmit: SubmitHandler<CreateMovie> = (data) => {
    data.gendersIds = gendersSelected.map((value) => value.key);
    data.cinesIds = selectedCinemas.map((value) => value.key);
    data.actors = actorsSelected;
    props.onSubmit(data);
  };

  return (
    <>
      <MostrarErrores errores={props.errores}></MostrarErrores>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            className=""
            {...register("titulo")}
          />
          {errors.titulo && <p className="">{errors.titulo.message}</p>}
        </div>
        <div className="">
          <label htmlFor="dateRelease">Fecha Lanzamiento</label>
          <input
            type="date"
            id="dateRelease"
            autoComplete="off"
            className=""
            {...register("fechaLanzamiento")}
          />
          {errors.fechaLanzamiento && (
            <p className="">{errors.fechaLanzamiento.message}</p>
          )}
        </div>
        <div className="">
          <label htmlFor="trailer">Trailler (Youtube)</label>
          <input
            type="text"
            id="trailer"
            autoComplete="off"
            className=""
            {...register("trailer")}
          />
        </div>
        <SelectImg
          label="Poster"
          imgUrl={currentImg}
          imgSelected={(poster) => {
            setValue("poster", poster);
          }}
        ></SelectImg>

        <div>
          <label htmlFor="">Generos</label>
          <MultiSelector
            selected={gendersSelected}
            noSelected={nogendersSelected}
            onChange={(selected, noSelected) => {
              setGendersSelected(selected);
              setNoGendersSelected(noSelected);
            }}
          ></MultiSelector>
        </div>

        <div>
          <label htmlFor="">Cines:</label>
          <MultiSelector
            selected={selectedCinemas}
            noSelected={unSelectedCinemas}
            onChange={(selected, unSelected) => {
              setSelectedCinemas(selected);
              setUnSelectedCinemas(unSelected);
            }}
          ></MultiSelector>
        </div>

        <div>
          <TypeaheadActors
            actors={actorsSelected}
            onAdd={(actores) => {
              setActorsSelected(actores);
            }}
            onRemove={(actor) => {
              const actors = actorsSelected.filter((x) => x !== actor);
              setActorsSelected(actors);
            }}
            onCambioPersonaje={(id, personaje) => {
              const indice = actorsSelected.findIndex((x) => x.id === id);
              const actores = { ...actorsSelected };
              actores[indice].personaje = personaje;
              setActorsSelected(actores);
            }}
          />
        </div>

        <div>
          <Button type="submit" disable={!isValid || isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
          <NavLink to={"/"}>Cancelar</NavLink>
        </div>
      </form>
    </>
  );
};

interface FormMovieProps {
  model?: CreateMovie;
  onSubmit: SubmitHandler<CreateMovie>;
  selectedGenders: Gender[];
  noselectedGenders: Gender[];
  selectedCinemas: CineModel[];
  unSelectedCinemas: CineModel[];
  actorsSelected: MovieActorModel[];
  errores: string[];
}

const validationRules = yup.object({
  titulo: yup.string().required("El titulo es obligatorio"),
  fechaLanzamiento: yup
    .string()
    .required("La fecha de lanzamiento es obligatoria"),
});

export default FormMovie;

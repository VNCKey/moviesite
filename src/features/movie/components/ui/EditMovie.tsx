import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FormMovie from "./FormMovie";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";
import type Gender from "@/features/gender/models/Gender.model";
import type CineModel from "@/features/cines/models/Cine.model";
import type MovieActorModel from "../../models/MovieActor.model";
import type CreateMovieI from "../../models/CreateMovie.model";

const EditMovie = () => {
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setModel({
        titulo: "Avengers" + id,
        fechaLanzamiento: "2020-05-11",
        trailer: "abc",
        poster:
          "https://th.bing.com/th/id/R.d77f5056227b42273b34453a26fd4e19?rik=xgX5BJl%2fTP9Rgw&pid=ImgRaw&r=0",
      });
    }, 500);
  }, [id]);

  const [model, setModel] = useState<CreateMovieI | undefined>(undefined);

  const onSubmit: SubmitHandler<CreateMovieI> = async (data) => {
    console.log("Editando peliucla....");
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
  };

  const gendersSelected: Gender[] = [{ id: 2, name: "Drama" }];
  const gendersNoSelected: Gender[] = [
    { id: 1, name: "Accion" },
    { id: 3, name: "Comedia" },
  ];

  const selectedCinema: CineModel[] = [
    {
      id: 1,
      name: "Spider",
      latitud: 0,
      longitud: 0,
    },
  ];
  const unSelectedCinema: CineModel[] = [
    {
      id: 2,
      name: "Batman",
      latitud: 0,
      longitud: 0,
    },
  ];

  const actoresSelect: MovieActorModel[] = [
    {
      id: 1,
      name: "Tom holland",
      personaje: "Spider-Man",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/500px-Tom_Holland_by_Gage_Skidmore.jpg",
    },
  ];
  return (
    <>
      <h3>Editar Pelicula</h3>
      {model ? (
        <FormMovie
          errores={[]}
          model={model}
          onSubmit={onSubmit}
          noselectedGenders={gendersNoSelected}
          selectedGenders={gendersSelected}
          selectedCinemas={selectedCinema}
          unSelectedCinemas={unSelectedCinema}
          actorsSelected={actoresSelect}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditMovie;

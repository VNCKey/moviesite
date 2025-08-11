import { type SubmitHandler } from "react-hook-form";
import FormMovie from "./FormMovie";
import type Gender from "@/features/gender/models/Gender.model";
import type CineModel from "@/features/cines/models/Cine.model";
import { useEffect, useState } from "react";
import clientApi from "@/api/clientAxios";
import type MoviesPostGet from "../../models/MoviePostGet";
import Loading from "@/components/ui/Loading";
import ConvertMovie from "../../utils/ConvertMovie";
import type Movie from "../../models/movie.model";
import { useNavigate } from "react-router";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";
import type CreateMovieI from "../../models/CreateMovie.model";

const CreateMovie = () => {
  const navigate = useNavigate();
  const [genderUnSelected, setGenderUnSelected] = useState<Gender[]>([]);
  const [cinesUnSelected, setCinesUnSelected] = useState<CineModel[]>([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    clientApi.get<MoviesPostGet>(`/peliculas/postget`).then((res) => {
      console.log(res.data);
      setCinesUnSelected(res.data.cines || []);
      setGenderUnSelected(res.data.generos || []);
      setCargando(false);
      console.log(genderUnSelected);
    });
  }, []);

  const onSubmit: SubmitHandler<CreateMovieI> = async (data) => {
    try {
      const formData = ConvertMovie(data);
      await clientApi.postForm<Movie>(`/peliculas`, formData);
      navigate("/");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Crear Pelicula</h3>
      {cargando ? (
        <Loading />
      ) : (
        <>
          <FormMovie
            errores={errores}
            onSubmit={onSubmit}
            selectedGenders={[]}
            noselectedGenders={genderUnSelected}
            selectedCinemas={[]}
            unSelectedCinemas={cinesUnSelected}
            actorsSelected={[]}
          ></FormMovie>
        </>
      )}
    </>
  );
};

export default CreateMovie;

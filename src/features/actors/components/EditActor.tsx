import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type CreateActor from "../models/CreateActor.model";
import FormActor from "./FormActor";
import { type SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";
import clientApi from "@/api/clientAxios";
import type Actor from "../models/Actor.Model";
import formatearFecha from "@/utils/formatearFecha";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";

const EditActor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [model, setModel] = useState<CreateActor | undefined>(undefined);
  const [errores, setErrores] = useState<string[]>([]);

  const onSubmit: SubmitHandler<CreateActor> = async (data) => {
    try {
      await clientApi.putForm(`actors/${id}`, data);
      navigate("/actors");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  useEffect(() => {
    clientApi.get<Actor>(`/actors/${id}`).then((res) => {
      const actor = res.data;
      const actorCreacion: CreateActor = {
        name: actor.name,
        dateOfBirth: formatearFecha(actor.fechaNacimiento),
        foto: actor.foto,
      };

      setModel(actorCreacion);
    });
  }, [id]);

  return (
    <>
      <h3>Editar Actores</h3>
      {model ? (
        <FormActor errores={errores} model={model} onSubmit={onSubmit} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditActor;

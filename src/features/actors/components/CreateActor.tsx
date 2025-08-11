import type { SubmitHandler } from "react-hook-form";
import FormActor from "./FormActor";
import type CreateActorInterface from "../models/CreateActor.model";
import { useState } from "react";
import { useNavigate } from "react-router";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";
import clientApi from "@/api/clientAxios";

const CreateActor = () => {
  const [errores, setErrores] = useState<string[]>([]);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateActorInterface> = async (data) => {
    try {
      await clientApi.postForm("/actors", data);
      navigate("/actors");
    } catch (error) {
      const erorres = extraerErrores(error as AxiosError);
      setErrores(erorres);
    }
  };

  return (
    <>
      <h3>Crear Actores </h3>
      <FormActor errores={errores} onSubmit={onSubmit} />
    </>
  );
};

export default CreateActor;

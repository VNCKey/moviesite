import type { SubmitHandler } from "react-hook-form";
import FormCine from "./FormCine";
import type CreateCineModule from "../models/CreateCine.module";
import { useNavigate } from "react-router";
import { useState } from "react";
import clientApi from "@/api/clientAxios";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";

const CreateCines = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

  const onSubmit: SubmitHandler<CreateCineModule> = async (data) => {
    try {
      await clientApi.post("/cines", data);
      navigate("/cines");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Crear Cine</h3>
      <FormCine errores={errores} onSubmit={onSubmit} />
    </>
  );
};

export default CreateCines;

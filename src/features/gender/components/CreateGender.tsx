import { type SubmitHandler } from "react-hook-form";
import type CreateGenderModel from "../models/CreateGender.model";
import GenderForm from "./GenderForm";
import clientApi from "../../../api/clientAxios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";

const CreateGender = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

  const onSubmit: SubmitHandler<CreateGenderModel> = async (data) => {
    try {
      await clientApi.post("/Gender", data);
      navigate("/genders");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Crear Genero</h3>
      <GenderForm errores={errores} onSubmit={onSubmit} />
    </>
  );
};

export default CreateGender;

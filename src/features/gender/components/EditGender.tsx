import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type CreateGender from "../models/CreateGender.model";
import GenderForm from "./GenderForm";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";
import clientApi from "@/api/clientAxios";
import type Gender from "../models/Gender.model";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";

const EditGender = () => {
  const { id } = useParams();
  const [model, setModel] = useState<CreateGender | undefined>(undefined);
  const [errores, setErrores] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    clientApi
      .get<Gender>(`/gender/${id}`)
      .then((res) => setModel(res.data))
      .catch(() => navigate("/genders"));
  }, [id, navigate]);

  const onSubmit: SubmitHandler<CreateGender> = async (data) => {
    try {
      await clientApi.put(`/gender/${id}`, data);
      navigate("/genders");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <div>Editar Genero</div>
      {model ? (
        <GenderForm errores={errores} model={model} onSubmit={onSubmit} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditGender;

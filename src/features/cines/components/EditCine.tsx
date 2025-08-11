import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type CreateCineModule from "../models/CreateCine.module";
import FormCine from "./FormCine";
import type { SubmitHandler } from "react-hook-form";
import Loading from "@/components/ui/Loading";
import clientApi from "@/api/clientAxios";
import type CineModel from "../models/Cine.model";
import { extraerErrores } from "@/utils/extraerErrores";
import type { AxiosError } from "axios";

const EditCines = () => {
  const { id } = useParams();
  const [model, setModel] = useState<CreateCineModule | undefined>(undefined);
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

  useEffect(() => {
    clientApi
      .get<CineModel>(`/cines/${id}`)
      .then((res) => setModel(res.data))
      .catch(() => navigate("/cines"));
  }, [id, navigate]);

  const onSubmit: SubmitHandler<CreateCineModule> = async (data) => {
    try {
      await clientApi.put(`/cines/${id}`, data);
      navigate("/cines");
    } catch (error) {
      const errores = extraerErrores(error as AxiosError);
      setErrores(errores);
    }
  };

  return (
    <>
      <h3>Editar cines</h3>
      {model ? (
        <FormCine
          errores={errores}
          model={model}
          onSubmit={onSubmit}
        ></FormCine>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditCines;

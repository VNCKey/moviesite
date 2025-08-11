import { useForm, type SubmitHandler } from "react-hook-form";
import type CreateCineModule from "../models/CreateCine.module";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FirstCapitalLetter } from "@/utils/validation/Validations";
import Button from "@/components/ui/Button";
import { NavLink } from "react-router";
import Map from "@/components/ui/Map";
import type Coordinate from "@/components/model/Coordinate.model";
import MostrarErrores from "@/components/ui/MostrarErrores";

const FormCine = (props: FormCineProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateCineModule>({
    resolver: yupResolver(validationRules),
    mode: "onChange",
    defaultValues: props.model ?? { name: "" },
  });

  function transformCoordinates(): Coordinate[] | undefined {
    if (props.model) {
      const response: Coordinate = {
        lat: props.model.latitud,
        lng: props.model.longitud,
      };

      return [response];
    }
    return undefined;
  }

  return (
    <>
      <MostrarErrores errores={props.errores} />

      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className="">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="name"
            className=""
            autoComplete="off"
            {...register("name")}
          />
          {errors.name && <p className="">{errors.name.message}</p>}
        </div>
        <div className="">
          <Map
            coordinate={transformCoordinates()}
            selectedLocation={(coordinate) => {
              setValue("latitud", coordinate.lat, { shouldValidate: true });
              setValue("longitud", coordinate.lng, { shouldValidate: true });
            }}
          />
        </div>
        <div className="">
          <Button type="submit" disable={!isValid || isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
          <NavLink to={"/cines"} className="">
            Cancelar
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default FormCine;

interface FormCineProps {
  model?: CreateCineModule;
  onSubmit: SubmitHandler<CreateCineModule>;
  errores: string[];
}

const validationRules = yup.object({
  name: yup
    .string()
    .required("El nombre es requerido")
    .test(FirstCapitalLetter()),
  latitud: yup.number().required(),
  longitud: yup.number().required(),
});

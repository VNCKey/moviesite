import type { AxiosError } from "axios";

export function extraerErrores(obj: AxiosError): string[] {
  const data = obj.response?.data as ResponseError;
  const error = data.errors;
  let mensajeError: string[] = [];
  for (const campo in error) {
    const mensajeCampo = error[campo].map(
      (mensajeError) => `${campo} : ${mensajeError}`
    );
    mensajeError = mensajeError.concat(mensajeCampo);
  }

  return mensajeError;
}

interface ResponseError {
  errors: {
    [campo: string]: string[];
  };
}

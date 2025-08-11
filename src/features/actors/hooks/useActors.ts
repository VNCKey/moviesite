import clientApi from "@/api/clientAxios";
import { useCallback, useEffect, useState } from "react";
import type Actor from "../models/Actor.Model";

export function useActors() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [recordsPorPagina, setRecorsPorPagina] = useState(5);
  const [cargando, setCargando] = useState(true);

  const cargarRegistros = useCallback(() => {
    setCargando(true);
    clientApi
      .get<Actor[]>(`/Actors`, {
        params: { pagina, recordsPorPagina },
      })
      .then((res) => {
        const cantidadTotalRegistros = parseInt(
          res.headers["cantidad-total-registros"]
        );

        setCantidadTotalRegistros(cantidadTotalRegistros);

        setActors(res.data);
        setCargando(false);
      });
  }, [pagina, recordsPorPagina]);

  useEffect(() => {
    cargarRegistros();
  }, [cargarRegistros]);

  return {
    cargando,
    pagina,
    recordsPorPagina,
    cantidadTotalRegistros,
    setPagina,
    setRecorsPorPagina,
    actors,
    cargarRegistros,
  };
}

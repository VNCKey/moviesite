import clientApi from "@/api/clientAxios";
import { useCallback, useEffect, useState } from "react";

export function useEntities<T>(url: string) {
  const [entities, setEntities] = useState<T[]>([]);
  const [cantidadTotalRegistros, setCantidadTotalRegistros] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [recordsPorPagina, setRecorsPorPagina] = useState(5);
  const [cargando, setCargando] = useState(true);

  const cargarRegistros = useCallback(() => {
    setCargando(true);
    clientApi
      .get<T[]>(url, {
        params: { pagina, recordsPorPagina },
      })
      .then((res) => {
        const cantidadTotalRegistros = parseInt(
          res.headers["cantidad-total-registros"]
        );

        setCantidadTotalRegistros(cantidadTotalRegistros);

        setEntities(res.data);
        setCargando(false);
      });
  }, [pagina, recordsPorPagina, url]);

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
    entities,
    cargarRegistros,
  };
}

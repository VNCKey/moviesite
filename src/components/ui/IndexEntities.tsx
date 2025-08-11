import clientApi from "@/api/clientAxios";
import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";
import Loading from "./Loading";
import Paginacion from "./Paginacion";
import ListGeneric from "./ListGeneric";
import confirmar from "@/utils/confirmar";

export default function IndexEntities<T>(props: IndiceEntitiesProps<T>) {
  const navigate = useNavigate();
  const botones = (urlEditar: string, id: number) => (
    <>
      <Button onclick={() => navigate(urlEditar)}>
        <i></i> Editar
      </Button>
      <Button onclick={() => confirmar(() => Borrar(id))}>
        <i></i> Borrar
      </Button>
    </>
  );
  const Borrar = async (id: number) => {
    try {
      await clientApi.delete(`${props.url}/${id}`);
      if (props.pagina == 1) {
        props.cargarRegistros();
      } else {
        props.setPagina(1);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {/* "/genders/create" */}
      <h3>{props.titulo}</h3>
      <div>
        <Button onclick={() => navigate(props.urlCrear)}>
          Crear {props.nombreEntitie}
        </Button>
      </div>
      {props.cargando ? (
        <Loading />
      ) : (
        <div>
          <div>
            <Paginacion
              paginaActual={props.pagina}
              registrosPorPagina={props.recordsPorPagina}
              cantidadTotalRegistros={props.cantidadTotalRegistros}
              registrosPorPaginaOpciones={[5, 10, 50]}
              onCambioPaginacion={(pagina, recordsPorPagina) => {
                props.setPagina(pagina);
                props.setRecorsPorPagina(recordsPorPagina);
              }}
            ></Paginacion>
          </div>

          <ListGeneric list={props.entities}>
            <table className="">
              {props.children(props.entities!, botones)}
            </table>
          </ListGeneric>
        </div>
      )}
    </>
  );
}

interface IndiceEntitiesProps<T> {
  url: string;
  urlCrear: string;
  titulo: string;
  nombreEntitie: string;
  pagina: number;
  recordsPorPagina: number;
  cantidadTotalRegistros: number;
  setPagina: (pagina: number) => void;
  setRecorsPorPagina: (recordsPorPagina: number) => void;
  entities: T[];
  cargando: boolean;
  cargarRegistros: () => void;
  children(
    entities: T[],
    botones: (urlEditar: string, id: number) => ReactNode
  ): ReactNode;
}

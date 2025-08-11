import { AsyncTypeahead } from "react-bootstrap-typeahead";
import type { Option } from "react-bootstrap-typeahead/types/types";
import type MovieActorModel from "../../models/MovieActor.model";
import { useState } from "react";
import clientApi from "@/api/clientAxios";

export default function TypeaheadActors(props: TypeaheadActorsProps) {
  const [actores, setActores] = useState<MovieActorModel[]>([]);
  const [cargando, setCargando] = useState(false);

  function manejarBusqueda(query: string) {
    setCargando(true);
    clientApi.get<MovieActorModel[]>(`/actors/${query}`).then((response) => {
      setActores(response.data);
      setCargando(false);
    });
  }
  const [elementoArrastrado, setElementoArrastrado] = useState<
    MovieActorModel | undefined
  >(undefined);

  const manejarDragStart = (actor: MovieActorModel) => {
    setElementoArrastrado(actor);
  };
  const manejarDragOver = (actor: MovieActorModel) => {
    if (!elementoArrastrado || actor.id === elementoArrastrado.id) return;
    const actors = [...props.actors];
    const indiceDesde = actors.findIndex((x) => x.id === elementoArrastrado.id);
    const indiceHasta = actors.findIndex((x) => x.id === actor.id);
    if (indiceDesde !== -1 && indiceHasta !== -1) {
      [actors[indiceDesde], actors[indiceHasta]] = [
        actors[indiceHasta],
        actors[indiceDesde],
      ];
      props.onAdd(actors);
    }
  };

  const selection: MovieActorModel[] = [];
  console.log("Actores:" + props.actors);
  return (
    <>
      <label htmlFor="">Actores</label>
      <AsyncTypeahead
        isLoading={cargando}
        onSearch={manejarBusqueda}
        id="typeahead"
        onChange={(actores: Option[]) => {
          const actorSelected = actores[0] as MovieActorModel;
          if (props.actors.findIndex((x) => x.id === actorSelected.id) === -1) {
            actorSelected.personaje = "";
            props.onAdd([...props.actors, actorSelected]);
          }
        }}
        options={actores}
        labelKey={(option: Option) => {
          const actor = option as MovieActorModel;
          return actor.name;
        }}
        filterBy={["name"]}
        placeholder="Escriba el nombre del actor..."
        minLength={2}
        flip={true}
        selected={selection}
        renderMenuItemChildren={(option: Option) => {
          const actor = option as MovieActorModel;
          return (
            <>
              <img
                src={actor.foto}
                alt={actor.name}
                style={{ width: "64px", height: "64px", marginRight: "10px" }}
              />
              {actor.name}
            </>
          );
        }}
      />
      <ul className="list-group">
        {props.actors.map((actor) => (
          <li
            draggable={true}
            onDragStart={() => manejarDragStart(actor)}
            onDragOver={() => manejarDragOver(actor)}
            className="list-group-item d-flex align-items-center"
            key={actor.id}
          >
            <div style={{ width: "70px" }}>
              <img src={actor.foto} alt="foto" style={{ height: "60px" }} />
            </div>
            <div style={{ width: "150px", marginLeft: "10px" }}>
              {actor.name}
            </div>
            <div className="flex-grow-1 mx-3">
              <input
                type="text"
                value={actor.personaje}
                className="form-control"
                placeholder="Personaje"
                onChange={(e) =>
                  props.onCambioPersonaje(actor.id, e.target.value)
                }
              />
            </div>
            <span
              role="button"
              className="badge text-bg-secondary"
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

interface TypeaheadActorsProps {
  actors: MovieActorModel[];
  onAdd(actors: MovieActorModel[]): void;
  onCambioPersonaje(id: number, personaje: string): void;
  onRemove(actor: MovieActorModel): void;
}

import IndexEntities from "@/components/ui/IndexEntities";
import type Actor from "../models/Actor.Model";
import { useEntities } from "@/hooks/useEntities";

const IndexActors = () => {
  const entitiesHook = useEntities<Actor>(`/Actors`);

  return (
    <>
      <IndexEntities<Actor>
        titulo="Actores"
        nombreEntitie="Actor"
        url="/actors"
        urlCrear="/actors/create"
        {...entitiesHook}
      >
        {(actors, botones) => (
          <>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {actors?.map((actor) => (
                <tr key={actor.id}>
                  <td>{actor.name}</td>
                  <td>{botones(`/actors/edit/${actor.id}`, actor.id)}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntities>
    </>
  );
};

export default IndexActors;

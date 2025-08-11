import IndexEntities from "@/components/ui/IndexEntities";
import type CineModel from "../models/Cine.model";
import { useEntities } from "@/hooks/useEntities";

const IndexCines = () => {
  const entitiesHook = useEntities<CineModel>(`/Cines`);

  return (
    <>
      <IndexEntities<CineModel>
        titulo="Cines"
        nombreEntitie="Cine"
        url="/cines"
        urlCrear="/cines/create"
        {...entitiesHook}
      >
        {(cines, botones) => (
          <>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cines?.map((cine) => (
                <tr key={cine.id}>
                  <td>{cine.name}</td>
                  <td>{botones(`/cines/edit/${cine.id}`, cine.id)}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntities>
    </>
  );
};

export default IndexCines;

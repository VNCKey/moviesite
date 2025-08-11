import { useEntities } from "@/hooks/useEntities";
import type Gender from "../models/Gender.model";
import IndexEntities from "@/components/ui/IndexEntities";

const IndexGender = () => {
  const entitiesHook = useEntities<Gender>(`/Gender`);

  return (
    <>
      <IndexEntities<Gender>
        titulo="Generos"
        nombreEntitie="Genero"
        url="/genders"
        urlCrear="/genders/create"
        {...entitiesHook}
      >
        {(genders, botones) => (
          <>
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {genders?.map((gender) => (
                <tr key={gender.id}>
                  <td>{gender.name}</td>
                  <td>{botones(`/genders/edit/${gender.id}`, gender.id)}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntities>
    </>
  );
};

export default IndexGender;

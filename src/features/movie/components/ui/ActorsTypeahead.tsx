import Select from 'react-select';
import type { SingleValueProps, OptionProps } from 'react-select';



import type MovieActorModel from "../../models/MovieActor.model";

type ActorOption = MovieActorModel & {
  value: number;
  label: string;
};

const ActorsSelect = (props: TypeActorsProps) => {
  const actors: MovieActorModel[] = [
    {
      id: 1,
      name: 'Max Verstappen',
      character: 'Piloto en F1 Movie',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg'
    },
    {
      id: 2,
      name: 'Oscar Piastri',
      character: 'Piloto en F1 Movie',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Oscar_Piastri.png/500px-Oscar_Piastri.png'
    },
    {
      id: 3,
      name: 'Brad Pitt',
      character: 'Actor Principal',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/330px-Brad_Pitt-69858.jpg'
    }
  ];

  const options: ActorOption[] = actors.map(actor => ({
    ...actor,
    value: actor.id,
    label: actor.name
  }));

  // Componente para mostrar un solo valor seleccionado
  const customSingleValue = (props: SingleValueProps<ActorOption, false>) => {
    const { data } = props;
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={data.foto} alt="" style={{ width: 40, height: 40, marginRight: 10 }} />
        <div>{data.label}</div>
      </div>
    );
  };

  // Componente para renderizar cada opción en el menú
  const customOption = (props: OptionProps<ActorOption, false>) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
        <img src={data.foto} alt="" style={{ width: 40, height: 40, marginRight: 10 }} />
        <div>
          <strong>{data.label}</strong>
          <div style={{ fontSize: 12 }}>{data.character}</div>
        </div>
      </div>
    );
  };

  // onChange requerido
  const handleChange = (selected: ActorOption | null) => {
    console.log("Actor seleccionado:", selected);
  };

  return (
    <div>
      <h2>Selecciona un actor</h2>
      <Select<ActorOption, false>
        options={options}
        placeholder="Escribe el nombre del actor"
        components={{
          SingleValue: customSingleValue,
          Option: customOption
        }}
        isClearable
        onChange={handleChange}
      />
    </div>
  );
};

export default ActorsSelect;

interface TypeActorsProps{
    actors: MovieActorModel[];
    onAdd(actors: MovieActorModel[]): void
}
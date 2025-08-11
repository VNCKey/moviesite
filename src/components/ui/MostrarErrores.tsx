export default function MostrarErrores(props: MostrarErrorerProps) {
  return (
    <>
      <ul>
        {props.errores.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
    </>
  );
}

interface MostrarErrorerProps {
  errores: string[];
}

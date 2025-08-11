const Paginacion = (props: PaginacionProps) => {
  const paginas = [];
  const cantidadMaximaPaginasMostrar = 5;
  const totalPaginas = Math.ceil(
    props.cantidadTotalRegistros / props.registrosPorPagina
  );
  const radio = Math.floor(cantidadMaximaPaginasMostrar / 2);

  for (let i = 1; i <= totalPaginas; i++) {
    if (i >= props.paginaActual - radio && i <= props.paginaActual + radio) {
      paginas.push(i);
    }
  }

  return (
    <>
      <div className="">
        <div>
          <div>
            <div>
              <label> Registro por pagina </label>
              <select
                defaultValue={props.registrosPorPagina}
                onChange={(e) =>
                  props.onCambioPaginacion(1, parseInt(e.target.value, 10))
                }
              >
                {props.registrosPorPaginaOpciones.map((opcion) => (
                  <option key={opcion}>{opcion}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <button
                  onClick={() =>
                    props.onCambioPaginacion(
                      props.paginaActual - 1,
                      props.registrosPorPagina
                    )
                  }
                >
                  &laquo;
                </button>
              </li>
              {paginas.map((pagina) => (
                <li key={pagina}>
                  <button
                    onClick={() =>
                      props.onCambioPaginacion(pagina, props.registrosPorPagina)
                    }
                  >
                    {pagina}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() =>
                    props.onCambioPaginacion(
                      props.paginaActual + 1,
                      props.registrosPorPagina
                    )
                  }
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paginacion;

interface PaginacionProps {
  paginaActual: number;
  registrosPorPagina: number;
  cantidadTotalRegistros: number;
  registrosPorPaginaOpciones: number[];
  onCambioPaginacion: (pagina: number, registrosPorPagina: number) => void;
}

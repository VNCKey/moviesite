import { NavLink } from "react-router"; // tu decisión, aunque no recomendado
import style from "../style/Menu.module.css";

const Menu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.containerNav}>
        <NavLink to={"/"}>PERUFLIX</NavLink>
        <div>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Filtrar Peliculas
              </NavLink>
            </li>
            <li>
              <NavLink to={"/genders"}>Géneros</NavLink>
            </li>
            <li>
              <NavLink to={"/actors"}>Actores</NavLink>
            </li>
            <li>
              <NavLink to={"/cines"}>Cines</NavLink>
            </li>
            <li>
              <NavLink to={"/movies/create"}>Crear Pelicula</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

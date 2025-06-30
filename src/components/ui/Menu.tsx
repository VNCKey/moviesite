import { NavLink } from "react-router"; // tu decisión, aunque no recomendado
import style from "../style/Menu.module.css";

const Menu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.containerNav}>
        <NavLink to={"/"}>
          <img src="/imagenes/logo.png" alt="Peruflix Logo" className={style.logo} />
        </NavLink>
        <ul className={style.navLinks}>
          <li><NavLink to={"/movies/filter"}>Filtrar Películas</NavLink></li>
          <li><NavLink to={"/genres"}>Géneros</NavLink></li>
          <li><NavLink to={"/actors"}>Actores</NavLink></li>
          <li><NavLink to={"/cines"}>Cines</NavLink></li>
          <li><NavLink to={"/movies/create"}>Crear Película</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
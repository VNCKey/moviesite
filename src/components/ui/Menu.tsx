import { NavLink } from "react-router"; // tu decisión, aunque no recomendado
import style from "../style/Menu.module.css";


const Menu = () => {
<<<<<<< HEAD
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
=======
    return (
        <nav className={style.nav}>
            <div className={style.containerNav}>
                <NavLink to={"/"}>PERUFLIX</NavLink>
                <div>
                    <ul>    
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : ""}>
                                Filtrar Peliculas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/genres'}>Géneros</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/actors'}>Actores</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cines'}>Cines</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/movies/create'}>Crear Pelicula</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
>>>>>>> 3c6a5ac0febe23b88188b0a9455fcd9a7c29be6b
};

export default Menu;
import { NavLink } from "react-router";
import style from "../style/Menu.module.css"

const Menu = () => {
    return (
        <nav className={style.nav}>
            <div className={style.containerNav}>
                <NavLink to={"/"}>PELICULAS</NavLink>
                <div>
                    <ul>    
                        <li>
                            <NavLink to={'/movies/filter'}>Filtrar Peliculas</NavLink>
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
};

export default Menu;
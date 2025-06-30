import type Movie from "../../models/movie.model";
import styles from"../style/MovieCard.module.css"

const MovieCard = (props: MovieCardProps) => {

    const buildLink = ()=> `/pelicula/${props.movie.id}`

    return (
      <div className={styles.cardMovie}>
        <a href={buildLink()}>
          <img alt="Poster" src={props.movie.poster} />
        </a>
        <p>
          <a href={buildLink()}>{props.movie.titulo}</a>
        </p>

        <div className={styles.buttons}>
          <a href={`${buildLink()}/editar`}>
            <button>Comprar</button>
          </a>
          <a href={`${buildLink()}/eliminar`}>
            <button>Ver Detalles</button>
          </a>
        </div>
      </div>
    );
};

export default MovieCard;

interface MovieCardProps{
    movie:Movie;
}
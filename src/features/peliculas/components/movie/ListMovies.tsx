import type Movie from "../../models/movie.model";
import MovieCard from "./MovieCard";
import style from "./ListMovies.module.css"

const ListMovies = (props: ListMoviesInterface) => {
    return (
        <div className={style.listCardMovie}>
            {props.movie.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default ListMovies;

interface ListMoviesInterface{
    movie:Movie[]
}
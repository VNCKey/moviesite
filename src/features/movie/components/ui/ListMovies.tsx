import type Movie from "../../models/movie.model";
import MovieCard from "./MovieCard";
import style from "../style/ListMovies.module.css"
import ListGeneric from "@/components/ui/ListGeneric";  //MoviesWebProject/moviesite/src/components/UI/ListGeneric

const ListMovies = ({movies}: ListMoviesInterface) => {

    return (
        <ListGeneric<Movie> list = {movies} listEmptyUI = {<>No hay peliculas para mostrar</>} >
            <div className={style.listCardMovie}>
                {movies?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </ListGeneric>
    );
    
    
};

export default ListMovies;

interface ListMoviesInterface{
    movies?:Movie[]
}
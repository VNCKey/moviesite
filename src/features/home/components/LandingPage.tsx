import ListMovies from "@/features/movie/components/ui/ListMovies";
import type Movie from "@/features/movie/models/movie.model";
import { useEffect, useState } from "react";

interface AppState{
    movie?: Movie[];
    upcomingMovie?: Movie[];
}

const LandingPage = () => {

    const [movies, setMovies] = useState<AppState>({});

    useEffect(() => {
        setTimeout(()=>{
            const movie: Movie[] = [
                {
                    id: 1,
                    titulo: "Elio",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002326?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
                {
                    id: 2,
                    titulo: "Como Entrenar a Tu Dragon",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002334?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
            ]

            const upcomingMovie: Movie[] = [
                {
                    id: 1,
                    titulo: "F1: La Película",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002429?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
                {
                    id: 2,
                    titulo: "Superman",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002318?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
            ]

            setMovies({movie,upcomingMovie})
        },1000)
    }, [])

    return (
        <>
            <h2>Peliculas</h2>

            <ListMovies movies={movies.movie}/>
            <h2>Estrenos</h2>
            <ListMovies movies={movies.upcomingMovie}/>
        </>
    );
};

export default LandingPage;
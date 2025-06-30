import ListMovies from "@/features/movie/components/ui/ListMovies";
import type Movie from "@/features/movie/models/movie.model";
import { useEffect, useState } from "react";
import styles  from "../../../components/style/LandingPage.module.css";
;
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
                titulo: "LEO",
                poster:
                  "https://i.pinimg.com/736x/57/e7/7a/57e77aedb4b53b8bf79391960f187b3b.jpg",
              },
              {
                id: 2,
                titulo: "COMO ENTRENAR A TU DRAGÓN",
                poster:
                  "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002334?referenceScheme=HeadOffice&allowPlaceHolder=true",
              },
            ];

            const upcomingMovie: Movie[] = [
                {
                    id: 1,
                    titulo: "F1: LA PELICULA",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002429?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
                {
                    id: 2,
                    titulo: "SUPERMAN",
                    poster: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002318?referenceScheme=HeadOffice&allowPlaceHolder=true"
                },
            ]

            setMovies({movie,upcomingMovie})
        },1000)
    }, [])

    return (
      <>
        <h2 className={styles.sectionTitle}>Películas</h2>
        <div className={styles.movieList}>
          <ListMovies movies={movies.movie} />
        </div>

        <h2 className={styles.sectionTitle}>Próximos Estrenos</h2>
        <div className={styles.movieList}>
          <ListMovies movies={movies.upcomingMovie} />
        </div>
      </>
    );
};

export default LandingPage;
import './App.css'
import ListMovies from './features/peliculas/components/movie/ListMovies'
import type Movie from './features/peliculas/models/movie.model'

function App() {


  const listMovie: Movie[] = [
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

  const listUpcomingPremiere: Movie[] = [
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

  return (
    <>
      <h2>Peliculas</h2>
      <ListMovies movie={listMovie}/>
      <p>Estrenos</p>
      <ListMovies movie={listUpcomingPremiere}/>
    </>
  )
}

export default App

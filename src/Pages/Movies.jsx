import MovieCard from "../Components/MovieCard"
import  MovieList  from "../Components/MovieList"

function Movies() {
  return (
    <main className="bg-gray-800 text-white h-screen">
      <MovieList></MovieList>
      <MovieCard></MovieCard>

    </main>
  )
}

export default Movies
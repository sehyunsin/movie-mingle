import { Movie } from '@/src/types/movie';
import { searchMovies } from '@/src/utils/api';
import MovieCard from '@/src/components/MovieCard';

export default async function Search({ searchParams }: { searchParams: { q: string } }) {
    const data = await searchMovies(searchParams.q);
    const movies: Movie[] = data.results;
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Search Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    );
  }
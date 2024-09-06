import Image from 'next/image';
import { fetchMovieDetails } from '../../../src/utils/api';
import { MovieDetail } from '@/src/types/movie';

export default async function Page({ params }: { params: { id: string } }) {
  const movie: MovieDetail = await fetchMovieDetails(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-600 mb-4">{movie.release_date} | {movie.runtime} min</p>
          <p className="mb-4">{movie.overview}</p>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2">Genres</h2>
            <div className="flex flex-wrap">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Rating</h2>
            <p className="text-3xl font-bold text-yellow-500">{movie.vote_average.toFixed(1)}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterPath }) => {
  return (
    <Link href={`/movie/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out transform hover:scale-105">
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={500}
          height={750}
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold truncate">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
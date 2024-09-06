import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-white font-bold text-2xl mb-4 md:mb-0">
          MovieMingle
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
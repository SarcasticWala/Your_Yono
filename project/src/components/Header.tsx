import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateToGames = () => {
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 flex justify-between items-center bg-transparent">
      <div className="text-white text-xl md:text-2xl font-bold">Logo</div>
      <nav className="flex items-center gap-4 md:gap-8">
        <a href="/" className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">Home</a>
        <a href="/about" className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">About</a>
        <a href="/t&c" className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">T&C</a>
        <a href="/contact" className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">Contact</a>
        <button 
          onClick={navigateToGames} 
          className="bg-red-500 text-white px-4 md:px-6 py-2 rounded-full hover:bg-red-600 transition-colors text-sm md:text-base"
        >
          All Apps
        </button>
      </nav>
    </header>
  );
};

export default Header;
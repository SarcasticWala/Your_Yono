import GameCard from '../components/GameCard';
import ScrollDown from '../components/ScrollDown';
import SeeAllGamesButton from '../components/SeeAllGamesButton';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden"
         style={{
           background: 'linear-gradient(182.96deg, rgba(245, 63, 161, 0.3) -9.82%, rgba(245, 63, 161, 0) 117.56%)',
           backgroundColor: 'rgba(24, 22, 71, 1)'
         }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:pt-40">
          <div className="max-w-[872px] mb-8 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8" style={{ height: 'auto' }}>
              Get Your<br />Game On
            </h1>
            <GameCard />
            <div className="mt-8 flex justify-center md:justify-start">
              <SeeAllGamesButton />
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <img 
              src="/src/assets/game-coin.png" 
              alt="Game Coin" 
              className="w-[250px] md:w-[500px] lg:w-[600px] h-auto object-contain transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;
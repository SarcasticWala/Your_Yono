import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import GameCard from '../components/GameCard';
import ScrollDown from '../components/ScrollDown';
import SeeAllGamesButton from '../components/SeeAllGamesButton';

const Home = () => {
  // Array of game data
  const games = [
    { id: 1, image: '/src/assets/game-coin.png', name: 'Game Coin' },
    { id: 2, image: '/src/assets/160248 1.png', name: 'Game 160248' },
    { id: 3, image: '/src/assets/img4.png', name: 'Game Image 4' },
    { id: 4, image: '/src/assets/img3.png', name: 'Game Image 3' },
    { id: 5, image: '/src/assets/jackpot.png', name: 'Jackpot' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(182.96deg, rgba(245, 63, 161, 0.3) -9.82%, rgba(245, 63, 161, 0) 117.56%)',
        backgroundColor: 'rgba(24, 22, 71, 1)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:pt-40">
          <div className="max-w-[872px] mb-8 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ height: 'auto' }}>
              Get Your<br />Game On
            </h1>
            <GameCard />
            <div className="mt-8 flex justify-center md:justify-start">
              <SeeAllGamesButton />
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Swiper Carousel */}
            
            <Swiper
  pagination={{
    clickable: true,
  }}
  modules={[Pagination, Autoplay]}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  loop={true}
  className="w-[200px] md:w-[350px] lg:w-[450px] sm:w-[100px] sm:h-[100px] md:h-[350px] lg:h-[450px] pb-4"
>
  {games.map((game) => (
    <SwiperSlide key={game.id}>
      <div className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${game.image})` }}>
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-auto object-contain transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>
      </div>
      <div className="relative bottom-550 left-1/2 transform -translate-x-1/2">
        <ScrollDown />
       
       
      </div>
    </div>
  );
};

export default Home;
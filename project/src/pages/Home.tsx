import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import GameCard from '../components/GameCard';
import ScrollDown from '../components/ScrollDown';
import SeeAllGamesButton from '../components/SeeAllGamesButton';

const Home = () => {
  // Array of image paths (replace with your actual image paths)
  const images = [
    '/src/assets/game-coin.png',
    '/src/assets/img4.png',
    '/src/assets/img3.png',
    '/src/assets/img4.png',
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
  {images.map((image, index) => (
    <SwiperSlide key={index}>
      <img
        src={image}
        alt={`Game Coin ${index + 1}`}
        className="w-full h-auto object-contain transform transition-transform duration-500 hover:scale-105"
      />
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>
      </div>
      <div className="relative bottom-500 left-1/2 transform -translate-x-1/2">
        <ScrollDown />
       
       
      </div>
    </div>
  );
};

export default Home;
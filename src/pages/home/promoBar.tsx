import { useIsMobile } from '../comman';

const PromoImageBanner = () => {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        maxWidth: '100%',
        overflow: 'hidden',
        margin: isMobile ? '20px' : '40px',
      }}
    >
      <img
        src="https://imgcdn.floweraura.com/home-page/refer-and-earn-desktop.jpg"
        alt="Refer & Earn"
        style={{
          width: isMobile ? '130%' : '100%', 
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default PromoImageBanner;


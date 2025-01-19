import { Carousel } from 'antd';
import { useIsMobile } from '../comman';
import './styles.css'
const CarouselComponent = () => {
  const isMobile = useIsMobile();

  const carouselItems = [
    {
      image:
        'https://imgcdn.floweraura.com/flower-birthday-homepage-fa-desktop.jpg?tr=w-1583,dpr-1.5,q-70',
    },
    {
      image: 'https://imgcdn.floweraura.com/plant-homepage-fa-desktop_5.jpg?tr=w-1583,dpr-1.5,q-70',
    },
    {
      image:
        'https://imgcdn.floweraura.com/bridal-flower-homepage-fa-desktop.jpg?tr=w-1583,dpr-1.5,q-70',
    },
  ];

  const containerStyle = {
    width: '100%',
    margin: '0 auto',
  };

  const slideStyle = {
    width: '100%',
    height: isMobile ? '600px' : '300px',  
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{ marginTop: '30px', ...containerStyle }}>
      <Carousel autoplay effect="fade" autoplaySpeed={1500} >
        {carouselItems.map((item, index) => (
          <div key={index} style={slideStyle}>
            <img src={item.image} alt={`Slide ${index}`} style={imageStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

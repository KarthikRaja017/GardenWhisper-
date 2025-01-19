import { Col, Row } from 'antd';
import { useIsMobile } from '../comman';
import './styles.css';

const giftsData = [
  {
    title: 'Birthday Gifts',
    imgSrc: 'https://imgcdn.floweraura.com/birthday_6.png?tr=w-298,h-298,dpr-1.5,q-70',
  },
  {
    title: 'Anniversary Gifts',
    imgSrc: 'https://imgcdn.floweraura.com/anniversary_7.png?tr=w-298,h-298,dpr-1.5,q-70',
  },
  {
    title: 'Gifts for Him',
    imgSrc: 'https://imgcdn.floweraura.com/gift_for_him_0.png?tr=w-298,h-298,dpr-1.5,q-70',
  },
  {
    title: 'Gifts for Her',
    imgSrc: 'https://imgcdn.floweraura.com/gift_for_her_0.png?tr=w-298,h-298,dpr-1.5,q-70',
  },
];

const GiftsSection = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height: isMobile ? 'auto' : '400px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
          Shop By Occasions & Relations
        </h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Surprise Your Loved Ones</p>
        <Row gutter={[24, 24]} justify="center">
          {giftsData.map((gift, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={6}>
              <div
                className="gift-image-container"
                style={{
                  width: isMobile ? '130px' : '250px',
                  height: isMobile ? '130px' : '250px',
                  margin: '0 auto',
                }}
              >
                <img
                  alt={gift.title}
                  src={gift.imgSrc}
                  className="gift-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
              </div>
              <div
                className="gift-title"
                style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px', color: '#333' }}
              >
                {gift.title}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GiftsSection;

import React from 'react';
import { Col, Row } from 'antd';
import './styles.css';  
import { useIsMobile } from '../comman';

const occasionsData = [
  {
    title: "Children's Day-14th Nov",
    imgSrc: 'https://imgcdn.floweraura.com/childrens-day_1.jpg?tr=w-300,h-300,dpr-1.5,q-70',
  },
  {
    title: 'Mens Day - 19th Nov',
    imgSrc: 'https://imgcdn.floweraura.com/mens-day_1.jpg?tr=w-300,h-300,dpr-1.5,q-70',
  },
  {
    title: 'Christmas - 25th Dec',
    imgSrc: 'https://imgcdn.floweraura.com/christmas.jpg?tr=w-300,h-300,dpr-1.5,q-70',
  },
  {
    title: 'New Year - 1st Jan',
    imgSrc: 'https://imgcdn.floweraura.com/new-year.jpg?tr=w-300,h-300,dpr-1.5,q-70',
  },
];

const UpcomingOccasions = () => {
  const isMobile = useIsMobile();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: '40px 20px',
    borderRadius: '20px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    margin: isMobile ? '20px' : '60px',
  };

  const titleStyle = {
    fontSize: '30px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '30px',
    textShadow: '1px 1px #b2ebf2',
  };

  const occasionCardStyle = {
    background: '#ffffff',
    borderRadius: '15px',
    overflow: 'hidden',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
    width: isMobile ? '100%' : '300px',  
    margin: isMobile ? '10px 0' : '10px',  
  };

  const occasionImageStyle = {
    width: '100%',
    height: 'auto',
    borderBottom: '5px solid #00acc1',
    transition: 'transform 0.3s',  // Adding transition for zoom effect
  };

  const occasionTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#00796b',
    padding: '15px',
    backgroundColor: '#e0f2f1',
    borderRadius: '0 0 15px 15px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Upcoming Occasions</h2>
      <Row gutter={[24, 24]} justify="center">
        {occasionsData.map((occasion, index) => (
          <Col key={index} xs={12} sm={12} md={6}>
            <div className="occasion-card" style={occasionCardStyle}>
              <img
                src={occasion.imgSrc}
                alt={occasion.title}
                style={occasionImageStyle}
                className="occasion-image"
              />
              <div className="occasion-title" style={occasionTitleStyle}>{occasion.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingOccasions;

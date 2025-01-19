import { Button, Card, Col, Row, Space, Tag } from 'antd';
import './styles.css';
import { useIsMobile } from '../comman';

const testimonials = [
  {
    id: 1,
    name: 'Alafiya Talib',
    rating: 5,
    date: '10/11/2024',
    comment:
      'Just as ordered. Really love the service and the quality of the product. Highly recommend FlowerAura.',
  },
  {
    id: 2,
    name: 'Antima',
    rating: 5,
    date: '09/11/2024',
    comment:
      'Beautiful cake... Same as depicted here... I love the freshness and flavour of FlowerAura cakes... Happy with the on-time delivery as well.',
  },
  {
    id: 3,
    name: 'Sritama Banerjee',
    rating: 5,
    date: '07/11/2024',
    comment:
      'It is beautiful and all the flowers are fresh. The product delivered looks the same as shown in the picture.',
  },
];

const TestimonialSection = () => {
    const isMobile = useIsMobile();

  return (
    <div style={{ padding: '20px' }}>
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ marginTop: '20px', marginLeft: '30px' }}>Customer Testimonial</h2>
        </div>
        <Button className="view-all-button">View All</Button>
      </Space>
      <Row gutter={24} justify="center" style={{ marginTop: '20px' }}>
        {testimonials.map((testimonial) => (
          <Col xs={24} sm={12} md={8} key={testimonial.id} style={{ marginBottom: '20px' }}>
            <Card
              className="testimonial-card"
              bordered={false}
              style={{
                height: isMobile?'180px':'150px', // Fixed height for uniform card size
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <p>{testimonial.comment}</p>
              <div>
                <span className="testimonial-name">{testimonial.name}</span>
                <Tag className="testimonial-rating">★ {testimonial.rating}</Tag>
                <span className="posted-date">Posted On: {testimonial.date}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TestimonialSection;

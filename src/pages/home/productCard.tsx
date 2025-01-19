import { Badge, Button, Card, Col, Rate, Row, Space, Typography } from 'antd';
import { useIsMobile } from '../comman';

const { Text, Title } = Typography;

const ProductCard = ({ product,isMobile }) => (
  <Card
    hoverable
    cover={
      <img
        alt={product.title}
        src={product.imgSrc}
        style={{
          borderRadius: '10px 10px 0 0',
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
    }
    style={{
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      overflow: 'hidden',
      width: '100%',
      height: '370px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    bodyStyle={{ padding: '16px' }}
    // actions={[<HeartOutlined key="like" style={{ fontSize: '20px', color: '#f5222d' }} />]}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <Badge.Ribbon text={product.deliveryTime} color="blue">
      <Title level={5} ellipsis={{ rows: 2 }} style={{ marginBottom: '8px' }}>
        {product.title}
      </Title>
    </Badge.Ribbon>
    <Text strong style={{ fontSize: '16px' }}>
      ₹ {product.price}
    </Text>
    <div style={{ margin: '8px 0' }}>
      <Rate disabled defaultValue={product.rating} style={{ fontSize: '14px' }} />
      <Text style={{ color: '#1890ff', marginLeft: '8px' }}>({product.reviews} Reviews)</Text>
    </div>
    <Text type="secondary">Earliest Delivery: {product.deliveryTime}</Text>
  </Card>
);

const ProductList = () => {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        backgroundColor: '#f9f9f9', // Light background color
        padding: '20px',
        margin: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
      }}
    >
      <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Title level={2} style={{ marginBottom: '5px' }}>
            Best Selling Flowers & Gifts
          </Title>
          <Text type="secondary" style={{ marginBottom: '20px', display: 'block' }}>
            Surprise Your Loved Ones
          </Text>
        </div>
        <Button className="view-all-button">View All</Button>
      </Space>

      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} isMobile={isMobile}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;

const products = [
  {
    id: 1,
    title: 'Chocolate Truffle Cake with Rich Flavor and Smooth Texture',
    price: 595,
    rating: 4.9,
    reviews: 803,
    deliveryTime: 'In 3 hours',
    imgSrc: 'https://imgcdn.floweraura.com/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.jpg?tr=w-304,dpr-1.5,q-70',
  },
  {
    id: 2,
    title: '10 Red Roses Bouquet',
    price: 545,
    rating: 4.9,
    reviews: 1622,
    deliveryTime: '30-Min Delivery',
    imgSrc: 'https://imgcdn.floweraura.com/DSC_1243_0.jpg?tr=w-304,dpr-1.5,q-70',
  },
  {
    id: 3,
    title: 'Lavender N Honey Luxe Fragrance Gift Set with Soothing Scents',
    price: 1375,
    rating: 4.8,
    reviews: 410,
    deliveryTime: '2-3 days',
    imgSrc: 'https://imgcdn.floweraura.com/lavender-n-honey-luxe-fragrance-gift-set-9757977gf-E.jpg?tr=w-304,dpr-1.5,q-70',
  },
  {
    id: 4,
    title: 'Rasmalai Pista Cream Cake with Delicate Flavors',
    price: 895,
    rating: 4.9,
    reviews: 264,
    deliveryTime: 'In 3 hours',
    imgSrc: 'https://imgcdn.floweraura.com/luscious-rasmalai-pista-cream-cake-9815470ca-A.JPG?tr=w-304,dpr-1.5,q-70',
  },
];

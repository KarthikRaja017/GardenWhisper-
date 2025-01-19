import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import { useIsMobile } from '../comman';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div style={{ backgroundColor: '#f7fafc', padding: '40px', borderRadius: '8px',cursor: 'pointer' }}>
        <Row gutter={32} justify="space-around">
          {isMobile ? (
            <>
              <Col xs={12}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>About Us</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Sell With Us</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Coupons & Deals</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Terms and Conditions</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Investor Relations</li>
                </ul>
              </Col>

              <Col xs={12}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Career</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Media</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Privacy Policy</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Reviews</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Blog</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Cancellation & Refund
                  </li>
                </ul>
              </Col>
            </>
          ) : (
            <>
              <Col sm={12} md={6}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>About Us</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Sell With Us</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Coupons & Deals</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                    Cancellation & Refund
                  </li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Terms and Conditions</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Investor Relations</li>
                </ul>
              </Col>

              <Col sm={12} md={6}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Career</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Media</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Privacy Policy</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Reviews</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Blog</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Retail Stores</li>
                </ul>
              </Col>

              <Col sm={12} md={6}>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' }}>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>INR ▼</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Corporate Gifts</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Franchise</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>FAQ</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>Contact Us</li>
                  <li style={{ marginBottom: '10px', fontWeight: 'bold' }}>WhatsApp</li>
                </ul>
              </Col>
            </>
          )}

          <Col
            xs={24}
            sm={12}
            md={6}
            style={{ textAlign: 'center', marginTop: isMobile ? '20px' : '0' }}
          >
            <Space direction="vertical">
              <Typography.Text
                style={{ marginBottom: '20px', fontSize: '14px', fontWeight: 'bold' }}
              >
                Spread The Love On Social Media
              </Typography.Text>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
                <FacebookOutlined
                  style={{ fontSize: '30px', color: '#3b5998', cursor: 'pointer' }}
                />
                {/* <TwitterOutlined
                  style={{ fontSize: '30px', color: '#1DA1F2', cursor: 'pointer' }}
                /> */}
                <YoutubeOutlined
                  style={{ fontSize: '30px', color: '#FF0000', cursor: 'pointer' }}
                />
                {/* <PinterestOutlined
                  style={{ fontSize: '30px', color: '#E60023', cursor: 'pointer' }}
                /> */}
                <InstagramOutlined
                  style={{ fontSize: '30px', color: '#C13584', cursor: 'pointer' }}
                />
                <LinkedinOutlined
                  style={{ fontSize: '30px', color: '#0077b5', cursor: 'pointer' }}
                />
              </div>
            </Space>
          </Col>
        </Row>
      </div>
      <FooterBottom isMobile={isMobile} />
    </>
  );
};

export default Footer;

const FooterBottom = (props) => {
  const { isMobile } = props;
  return (
    <>
      <Space
        style={{
          padding: '10px 0',
          borderTop: '1px solid #eaeaea',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {!isMobile && (
          <div>
            <img
              src="/logo1.png"
              alt="Logo"
              style={{ height: '40px', marginRight: '40px', marginLeft: '40px',cursor: 'pointer' }}
            />
            <span style={{ fontSize: '14px', color: '#666', marginRight: '40px' }}>
              Copyright © 2024. @kar3ik_17 
            </span>
          </div>
        )}
      </Space>
      {isMobile && (
        <Space
          style={{
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          direction='vertical'
        >
            <img
              src="/logo1.png"
              alt="Logo"
              style={{ height: '40px', marginRight: '40px', marginLeft: '40px',cursor: 'pointer' }}
            />
          <span style={{ fontSize: '14px', color: '#666' }}>
            Copyright © 2024. @kar3ik_17
          </span>
        </Space>
      )}
    </>
  );
};

import {
  AppstoreOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Badge, Button, Col, Input, Layout, Row, Space, Tooltip } from 'antd';
import { useState } from 'react';
import { useIsMobile } from '../comman';
import HeaderMenu from './headerMenu';

const { Header } = Layout;

const CustomHeader = () => {
  const isMobile = useIsMobile();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Header
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          height: '100%',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={openDrawer}
            style={{ fontSize: '16px' }}
          />
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px',
            marginLeft: isMobile ? '10px' : 0,
          }}
        >
          <img
            src="/logo1.png"
            alt="Logo"
            style={{ height: isMobile ? 40 : 60, marginRight: 10, marginBottom: '10px' }}
          />
        </div>

        {!isMobile && <SearchBar />}
        <IconBar isMobile={isMobile} />
      </Header>
      {isMobile && (
        <Row justify="center" align="middle">
          <Col span={24}>
            <SearchBar isMobile={isMobile} />
          </Col>
        </Row>
      )}
      <div
        style={{
          position: 'sticky', // Stick to the top when scrolling
          top: 0, // Stick to the top of the page
          zIndex: 9999, // Ensure it stays on top of other content, use a high value
          backgroundColor: '#fff', // Background color to make it visible
          borderBottom: '1px solid #e0e0e0', // Optional: Add border for separation
        }}
      >
        <HeaderMenu
          isMobile={isMobile}
          setDrawerVisible={setDrawerVisible}
          drawerVisible={drawerVisible}
        />
      </div>
    </div>
  );
};
export default CustomHeader;

const SearchBar = (props) => {
  const { isMobile } = props;
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: '#f0f4f8',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        marginTop: '15px',
        width: isMobile ? '100%' : '600px',
      }}
    >
      <Input
        placeholder="Search for Flowers"
        bordered={false}
        style={{ backgroundColor: 'transparent', fontSize: '14px', color: '#666' }}
      />
      <SearchOutlined style={{ fontSize: '16px', color: '#666', marginLeft: 'auto' }} />
    </div>
  );
};

const IconBar = (props) => {
  const { isMobile } = props;

  return (
    <Space
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        margin: '0 ',
        marginBottom: '10px',
        marginTop: '15px',
        marginRight: '0',
      }}
    >
      {!isMobile && (
        <Tooltip title="Track Order">
          <div style={{ textAlign: 'center', lineHeight: '1.2', cursor: 'pointer' }}>
            <EnvironmentOutlined style={{ fontSize: '24px' }} />
            {!isMobile && <div style={{ fontSize: '12px', marginTop: '4px' }}>Track Order</div>}
          </div>
        </Tooltip>
      )}

      {!isMobile && (
        <Tooltip title="Gift Finder">
          <div style={{ textAlign: 'center', lineHeight: '1.2', cursor: 'pointer' }}>
            <GiftOutlined style={{ fontSize: '24px' }} />
            {!isMobile && <div style={{ fontSize: '12px', marginTop: '4px' }}>Gift Finder</div>}
          </div>
        </Tooltip>
      )}

      <Tooltip title="Cart">
        <div style={{ textAlign: 'center', lineHeight: '1.2', cursor: 'pointer' }}>
          <Badge count={1} showZero>
            <ShoppingCartOutlined style={{ fontSize: '24px' }} />
          </Badge>
          {!isMobile && <div style={{ fontSize: '12px', marginTop: '4px' }}>Cart</div>}
        </div>
      </Tooltip>

      <Tooltip title="Sign In">
        <div style={{ textAlign: 'center', lineHeight: '1.2', cursor: 'pointer' }}>
          <UserOutlined style={{ fontSize: '24px' }} />
          {!isMobile && <div style={{ fontSize: '12px', marginTop: '4px' }}>Sign In</div>}
        </div>
      </Tooltip>

      <Tooltip title="More">
        <div style={{ textAlign: 'center', lineHeight: '1.2', cursor: 'pointer' }}>
          <AppstoreOutlined style={{ fontSize: '24px' }} />
          {!isMobile && <div style={{ fontSize: '12px', marginTop: '4px' }}>More</div>}
        </div>
      </Tooltip>
    </Space>
  );
};

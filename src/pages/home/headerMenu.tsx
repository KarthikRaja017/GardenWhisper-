import { Col, Drawer, Row } from 'antd';

const HeaderMenu = (props) => {
  const { isMobile, drawerVisible, setDrawerVisible } = props;

  const menuItems = [
    'Express Delivery',
    'Flowers',
    'Combos',
    'Personalised',
    'Plants',
    'Anniversary',
    'Birthday',
    'Occasions',
    'International',
  ];

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Drawer title="Menu" placement="left" onClose={closeDrawer} visible={drawerVisible}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '10px 0',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {item}
              </div>
            ))}
          </Drawer>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            borderBottom: '1px solid #ddd',
            padding: '10px 0',
            backgroundColor: '#fff',
            textAlign: 'center',
            marginTop: '10px',
            
          }}
        >
          <Row justify="center" gutter={[40, 16]}>
            {menuItems.map((item, index) => (
              <Col key={index} style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                {item}
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;

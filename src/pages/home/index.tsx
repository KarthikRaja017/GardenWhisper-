import { WhatsAppOutlined } from '@ant-design/icons'; // Import WhatsApp icon
import { useEffect, useRef, useState } from 'react';
import { PageHelmet, useIsMobile } from '../comman';
import CarouselComponent from './carousel';
import Footer from './footer';
import GiftsSection from './giftsSection';
import CustomHeader from './header';
import './mainStyle.css'; // Import custom styles
import ProductList from './productCard';
import PromoBanner from './promoBar';
import TestimonialSection from './testimonialSection';
import UpcomingOccasions from './upcoming';

const Home = () => {
  const isMobile = useIsMobile();

  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 },
    ); 

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHelmet />
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <CustomHeader />

        {/* Sections with fade-in effect */}
        <div
          className={`fade-in ${visibleSections.includes(0) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <CarouselComponent />
        </div>

        {!isMobile ? (
          <div
            className={`fade-in ${visibleSections.includes(1) ? 'visible' : ''}`}
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            <ProductList />
          </div>
        ) : (
          <ProductList />
        )}

        <div
          className={`fade-in ${visibleSections.includes(2) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <PromoBanner />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(3) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <UpcomingOccasions />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(4) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <GiftsSection />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(5) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <TestimonialSection />
        </div>

        <Footer />

        <WhatsAppOutlined
          style={{
            fontSize: '36px',
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
            animation: 'pulse 1.5s infinite',
            cursor: 'pointer',
          }}
          href="https://wa.me/9952202256"
          target="_blank"
        />
      </div>
    </>
  );
};

export default Home;



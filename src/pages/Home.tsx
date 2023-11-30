import React, { useState, useEffect, useRef } from 'react';
import Header from '../General_Components/Header';
import LeftSubHeader from '../components/Home/LeftSubHeader';
import RightSubHeader from '../components/Home/RightSubHeader';
import Offers from '../components/Home/Offers';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import LimitedTimeOffer from '../components/Home/LimitedTimeOffer';
// import { useGlobalContext } from '../context/AppContext';
import MoreInfo from '../components/Home/MoreInfo';
import Footer from '../General_Components/Footer';

import background_1 from '../assets/background_1.jpg';
import background_3 from '../assets/background_3.jpg';

// const style: React.CSSProperties = {
//   color: '#61dafb',
//   textDecoration: 'none',
//   fontSize: 40,
// };

function Home() {
  let refContainer: any = useRef(null);

  const [background, setBackground] = useState(`url(${background_1})`);
  document.body.style.backgroundImage = background;

  useEffect(() => {
    const changeBackgroundImage = (entries: any) => {
      const [entry] = entries;

      entry.isIntersecting
        ? setBackground(`url(${background_3})`)
        : setBackground(`url(${background_1})`);
    };

    const backgroundImageObserver = new IntersectionObserver(
      changeBackgroundImage,
      {
        root: null,
        threshold: 0.14,
      }
    );

    backgroundImageObserver.observe(refContainer.current);
  }, [refContainer]);

  return (
    <div className="home-container">
      <Header backgroundColorIsWhite={false}/>
      <div className="subHeaders">
        <LeftSubHeader />
        <RightSubHeader />
      </div>
      <Offers />
      <div ref={refContainer}>
        <FeaturedProducts />
        <LimitedTimeOffer />
        <MoreInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

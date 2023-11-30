import React from 'react';
import Header from '../General_Components/Header';
import Footer from '../General_Components/Footer';
import ContentLeft from '../components/Store/ContentLeft';
import ContentRight from './../components/Store/ContentRight';

const Store = () => {
  document.body.style.backgroundImage = 'none';
  return (
    <div>
      <Header backgroundColorIsWhite = {true} />
      <div className='everything-container'>
        <ContentLeft />
        <ContentRight />
      </div>
      <Footer />
    </div>
  );
};

export default Store;

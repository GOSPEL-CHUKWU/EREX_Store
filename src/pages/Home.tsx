import React from 'react';
import Header from '../General_Components/Header';
import LeftSubHeader from '../components/Home/LeftSubHeader';
import RightSubHeader from '../components/Home/RightSubHeader';

// const style: React.CSSProperties = {
//   color: '#61dafb',
//   textDecoration: 'none',
//   fontSize: 40,
// };

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className='subHeaders'>
        <LeftSubHeader />
        <RightSubHeader />
      </div>
    </div>
  );
}

export default Home;

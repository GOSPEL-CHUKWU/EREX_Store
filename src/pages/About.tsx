import React from 'react';
import Header from '../General_Components/Header';

const style: React.CSSProperties = {
  color: '#61dafb',
  textDecoration: 'none',
  fontSize: 40,
};

function Home() {
  return (
    <header className="App-header">
      <Header backgroundColorIsWhite={true} />
      <p>This is gonna be ABOUT this code base... Alright!!!</p>
      <a
        style={style}
        className="App-link"
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        Explicit Content Info🔞
      </a>
    </header>
  );
}

export default Home;

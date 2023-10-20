import React from 'react';
import ReactRouterSetup from './navigation/index';
import background_1 from './assets/background_1.jpg';
import './App.css';

function App() {
  document.body.style.backgroundImage = `url(${background_1})`;
  return (
    <div className="App">
      <ReactRouterSetup />
    </div>
  );
}

export default App;

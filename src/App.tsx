import React from 'react';
import ReactRouterSetup from './navigation/index';
import './App.css';
// import { useGlobalContext } from './context/AppContext';

function App() {

  return (
    <div className="App">
      <ReactRouterSetup />
    </div>
  );
}

export default App;

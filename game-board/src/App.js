import React from 'react';
import './App.css';
import Header from './Header.js';
import Player from './Player';

function App() {
  return (
    <div className="scoreboard">
        <Header />
        {/* player list */}
        <Player />
    </div>
  );
}

export default App;


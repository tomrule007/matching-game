import React, { useState, useEffect } from 'react';
import FlipCard from './components/FlipCard';
import symbol1 from './assets/angular-seeklogo.com.svg';
import symbol2 from './assets/gatsby-seeklogo.com.svg';
import symbol3 from './assets/jest-seeklogo.com.svg';
import symbol4 from './assets/nodejs-seeklogo.com.svg';
import symbol5 from './assets/npm-node-package-manager.svg';
import symbol6 from './assets/react-seeklogo.com.svg';
import symbol7 from './assets/redux-seeklogo.com.svg';
import symbol8 from './assets/vuejs-seeklogo.com.svg';

import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const symbols = [
      symbol1,
      symbol2,
      symbol3,
      symbol4,
      symbol5,
      symbol6,
      symbol7,
      symbol8,
      symbol1,
      symbol2,
      symbol3,
      symbol4,
      symbol5,
      symbol6,
      symbol7,
      symbol8
    ];
    console.log('app mounted');
    setCards(symbols);
  }, []);
  console.log(cards);
  return (
    <div className="app">
      <div className="win-display hidden">
        <h1>
          Congrats! <br />
          You Won :)
        </h1>
      </div>

      <div className="title">
        <h1>Matching Game</h1>
      </div>

      <div className="stats-controls">
        <div className="stats">
          <div className="stats__item star-rating">☆☆★</div>
          <div className="stats__item game-timer">01:21</div>
          <div className="stats__item moves">0 Moves</div>
        </div>

        <div className="reset">
          <label for="btn-reset">⟳</label>
          <button id="btn-reset" onclick="window.location.reload()">
            reset
          </button>
        </div>
      </div>

      <div className="card-grid">
        {cards.map((symbol, index) => (
          <FlipCard backSymbol={{ alt: 'alt', src: symbol }} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

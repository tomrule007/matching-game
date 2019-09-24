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
const symbols = [
  { alt: 'symbol1', src: symbol1, show: false },
  { alt: 'symbol2', src: symbol2, show: false },
  { alt: 'symbol3', src: symbol3, show: false },
  { alt: 'symbol4', src: symbol4, show: false },
  { alt: 'symbol5', src: symbol5, show: false },
  { alt: 'symbol6', src: symbol6, show: false },
  { alt: 'symbol7', src: symbol7, show: false },
  { alt: 'symbol8', src: symbol8, show: false }
];

// utility functions
const doubledSymbols = symbols.reduce((acc, cur) => [...acc, cur, cur], []);
const getRandomIndex = ({ length }) => Math.floor(Math.random() * (length - 1));
const spliceRandom = array => array.splice(getRandomIndex(array), 1);

function App() {
  const [cards, setCards] = useState([]);
  const [previousCardAlt, setPreviousCardAlt] = useState(null);
  const [pairCount, setPairCount] = useState(0);

  useEffect(() => {
    const orderedSymbols = [...doubledSymbols];
    let randomizedSymbols = [];
    for (let i = 15; i >= 0; i--) {
      randomizedSymbols.push(...spliceRandom(orderedSymbols));
    }
    setCards(randomizedSymbols);
  }, []);

  const cardClickHandler = index => {
    const clickedCard = cards[index];
    let updatedCardsState = [...cards];

    if (previousCardAlt && previousCardAlt === clickedCard.alt) {
      //previous and current match
      //if previous is clicked see if it equals current click
      console.log('pairCount: ' + (pairCount + 1));
      setPairCount(pairCount + 1);
    }
    if (previousCardAlt && !(previousCardAlt === clickedCard.alt)) {
      console.log('start over');
      setPairCount(0);
      updatedCardsState = updatedCardsState.map(card => ({
        ...card,
        show: false
      }));
    }

    setPreviousCardAlt(
      previousCardAlt === clickedCard.alt ? null : clickedCard.alt
    );

    //always show last clicked
    updatedCardsState[index] = { ...clickedCard, show: true };
    setCards(updatedCardsState);
  };
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
          <FlipCard
            clickHandler={cardClickHandler}
            show={symbol.show}
            alt={symbol.alt}
            src={symbol.src}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import FlipCard from './components/FlipCard';
import frontSymbol from './assets/javascript-js-seeklogo.com.svg';
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
const doubledSymbols = symbols.reduce((acc, cur) => [...acc, cur, cur], []);
// random array utility function
const getRandomizedArray = items => {
  const getRandomIndex = ({ length }) =>
    Math.floor(Math.random() * (length - 1));
  const spliceRandom = array => array.splice(getRandomIndex(array), 1);

  const availableItems = [...items];
  return items.map(() => spliceRandom(availableItems)[0]);
};

function App() {
  const [cards, setCards] = useState([]);
  const [previousCardAlt, setPreviousCardAlt] = useState(null);
  const [pairCount, setPairCount] = useState(0);

  useEffect(() => {
    setCards(getRandomizedArray(doubledSymbols));
  }, []);
  const newGameClickHandler = () => {
    // needs refactoring but works for now
    window.location.reload();
  };
  const cardClickHandler = index => {
    const clickedCard = cards[index];
    let updatedCardsState = [...cards];

    if (previousCardAlt && previousCardAlt === clickedCard.alt) {
      setPairCount(pairCount + 1);
    }
    if (previousCardAlt && !(previousCardAlt === clickedCard.alt)) {
      setPairCount(0);
      updatedCardsState = updatedCardsState.map(card => ({
        ...card,
        show: false
      }));
    }

    setPreviousCardAlt(
      previousCardAlt === clickedCard.alt ? null : clickedCard.alt
    );

    // always show last clicked
    updatedCardsState[index] = { ...clickedCard, show: true };
    setCards(updatedCardsState);
  };
  return (
    <div className="app">
      {pairCount === 8 ? (
        <div className="win-display">
          <h1>
            Congrats! <br />
            You Won :)
          </h1>
        </div>
      ) : null}

      <div className="title">
        <h1>Matching Game</h1>
      </div>
      <div className="stats-controls">
        <div className="controls">
          <button onClick={newGameClickHandler}>New Game</button>
        </div>
      </div>
      <div className="card-grid">
        {cards.map((symbol, index) => (
          <FlipCard
            clickHandler={cardClickHandler}
            show={symbol.show}
            index={index}
            key={index}
            front={<img alt="" src={frontSymbol} />}
            back={<img alt={symbol.alt} src={symbol.src} />}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

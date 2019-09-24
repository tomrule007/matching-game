import React, { useState } from 'react';
import FlipCard from './components/FlipCard';
import './App.css';

function App() {
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
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    </div>
  );
}

export default App;

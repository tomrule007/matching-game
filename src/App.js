import React from 'react';
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
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">
              <div className="back-symbol">
                <img src="./assets/angular-seeklogo.com.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                alt="JS logo"
                src="./assets/javascript-js-seeklogo.com.svg"
              />
            </div>
            <div className="flip-card-back">back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

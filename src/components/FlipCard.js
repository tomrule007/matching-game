import React from 'react';
import jsLogo from '../assets/javascript-js-seeklogo.com.svg';

const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt="JS logo" src={jsLogo} />
        </div>
        <div className="flip-card-back">back</div>
      </div>
    </div>
  );
};

export default FlipCard;

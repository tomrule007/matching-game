import React from 'react';
import './FlipCard.css';

const FlipCard = ({ clickHandler, flip, index, front, back }) => {
  return (
    <div
      className={'flip-card' + (flip ? ' flip' : '')}
      onClick={() => !flip && clickHandler(index)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;

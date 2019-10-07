import React from 'react';
import './FlipCard.css';

const FlipCard = ({ clickHandler, show, index, front, back }) => {
  return (
    <div
      className={'flip-card' + (show ? ' flip' : '')}
      onClick={() => !show && clickHandler(index)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;

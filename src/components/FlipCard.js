import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FlipCard.css';

const FlipCard = ({ clickHandler, flip, front, back }) => {
  return (
    <div className={'flip-card' + (flip ? ' flip' : '')} onClick={clickHandler}>
      <div className="flip-card-inner">
        <div className="flip-card-front">{front}</div>
        {/* timeout duration equals half flip transition time */}
        <CSSTransition in={flip} timeout={400} unmountOnExit>
          <div className="flip-card-back">{back}</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default FlipCard;

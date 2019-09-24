import React from 'react';
import jsLogo from '../assets/javascript-js-seeklogo.com.svg';

const FlipCard = ({ clickHandler, show, alt, src, index }) => {
  return (
    <div
      className={'flip-card' + (show ? ' flip' : '')}
      onClick={() => !show && clickHandler(index)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt="JS logo" src={jsLogo} />
        </div>
        <div className="flip-card-back">
          <img alt={alt} src={src} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

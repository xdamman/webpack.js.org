import React from 'react';
import './support-style';

export default ({number, type}) => {
  return (
    <div className="support">
      {[...Array(number)].map((x, i) =>
        <a key={ i }
          className="support__item"
          href={ `https://opencollective.com/webpack/${type}/${i}/website` } 
          target="_blank">
          <img 
            src={ `//opencollective.com/webpack/${type}/${i}/avatar` } 
            alt={ `${type} avatar` } />
        </a>
      )}

      <div className="support__bottom">
        <a className="support__button" href="https://opencollective.com/webpack#support">
          Become a { type.replace(/\b./g, m => m.toUpperCase()) }
        </a>
      </div>
    </div>
  );
};

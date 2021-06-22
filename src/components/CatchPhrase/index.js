import React from 'react';
import './styles.scss';
import rightPolygon from 'src/assets/images/right-polygon.svg';

const CatchPhrase = () => {
  const ok = 'truc';

  return (
    <div className="catchphrase">
      <img
        src={rightPolygon}
        alt=""
        className="catchphrase__svg"
      />
      <h1 className="catchphrase__title">enter our league</h1>
      <li className="catchphrase__content">
        <ul className="catchphrase__phrase">Compete with top managers</ul>
        <ul className="catchphrase__phrase">Crush leagues</ul>
        <ul className="catchphrase__phrase">Earn prizes</ul>
      </li>
    </div>
  );
};

export default CatchPhrase;

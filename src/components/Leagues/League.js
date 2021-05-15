import React from 'react';
import './styles.scss';

const League = () => {
  const ok = 'truc';

  return (
    <div className="league">
      <div className="league__info-container">
        <p className="league__info-gw">
          163
        </p>
        <p className="league__info-date">
          10-12-may
        </p>
      </div>
      <div className="league__status">
        <p className="league__status-text">Opened</p>
        <div className="league__status-circle" />
      </div>
    </div>
  );
};

export default League;

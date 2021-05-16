import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import colorizeLeagueStatus from 'src/selectors/colorizeLeagueStatus';

const League = ({
  gameWeek,
  status,
  slug,
  canCompose,
}) => {
  const color = colorizeLeagueStatus(status);
  const OPENED = 'opened';

  return (
    <div className="league">
      <div className="league__info-container">
        <p className="league__info-gw">
          {gameWeek}
        </p>
        <p className="league__info-date">
          {slug}
        </p>
      </div>
      <div className="league__status">
        <p className="league__status-text">{status}</p>
        <div
          className="league__status-circle"
          style={{ backgroundColor: color }}
        />
      </div>
      {status === OPENED && canCompose && (
        <div className="league__register-container">
          <button
            className="league__register-button"
            type="button"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

League.propTypes = {
  gameWeek: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  canCompose: PropTypes.bool.isRequired,
};

export default League;

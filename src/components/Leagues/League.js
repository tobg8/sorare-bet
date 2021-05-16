import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

import colorizeLeagueStatus from 'src/selectors/colorizeLeagueStatus';

const League = ({
  gameWeek,
  status,
  slug,
  canCompose,
  registered,
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
      {status === OPENED && canCompose && !registered && (
        <Link to="/register" className="league__register-container">
          <button
            className="league__register-button"
            type="button"
          >
            Register
          </button>
        </Link>
      )}
      {registered && status === OPENED && (
        <div className="league__is-register">
          Registered
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
  registered: PropTypes.bool,
};

League.defaultProps = {
  registered: null,
};

export default League;

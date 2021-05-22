import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slots from 'src/containers/Slots';

import colorizeLeagueStatus from 'src/selectors/colorizeLeagueStatus';
import getManagerRegistrationId from 'src/selectors/getManagerRegistrationId';
import userIsRegistered from 'src/selectors/userIsRegistered';
import Manager from 'src/containers/Manager';
import ShowTeams from 'src/containers/ShowTeams';
import './styles.scss';

const League = ({
  gameWeek,
  status,
  slug,
  canCompose,
  registered,
  maxPlaces,
  lockedPlaces,
  fetchManagers,
  managers,
  managerId,
  handleTeamPreviewModal,
  fetchTeam,
}) => {
  useEffect(() => {
    setTimeout(() => {
      fetchManagers(gameWeek);
    }, 1000);
  }, []);
  const color = colorizeLeagueStatus(status);
  const OPENED = 'opened';

  const fetchMyTeam = () => {
    const myManager = getManagerRegistrationId(managers, managerId);
    fetchTeam(myManager[0].id, gameWeek);
    handleTeamPreviewModal();
  };

  return (
    <div className="league">
      <div className="league__info-container">
        <Slots
          gameWeek={gameWeek}
          maxPlaces={maxPlaces}
          lockedPlaces={lockedPlaces}
        />
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
      {userIsRegistered(managers, managerId) && (
        <div className="league__show-my-team" onClick={fetchMyTeam}>Show my team</div>
      )}
      <ShowTeams
        gameWeek={gameWeek}
      />
      <div className="manager">
        {
        managers && (
          managers.map((manager) => <Manager manager={manager} key={manager.id} />))
        }
      </div>
    </div>
  );
};

League.propTypes = {
  gameWeek: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  canCompose: PropTypes.bool.isRequired,
  registered: PropTypes.bool,
  maxPlaces: PropTypes.number,
  lockedPlaces: PropTypes.number,
  fetchManagers: PropTypes.func.isRequired,
  managers: PropTypes.array,
  managerId: PropTypes.string.isRequired,
  handleTeamPreviewModal: PropTypes.func.isRequired,
  fetchTeam: PropTypes.func.isRequired,
};

League.defaultProps = {
  registered: null,
  managers: null,
  maxPlaces: 0,
  lockedPlaces: 0,
};

export default League;

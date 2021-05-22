import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import League from './League';

const Leagues = ({
  fetchCurrentLeagues,
  leagues,
  registered,
  managerIsRegistered,
  fetchManagers,
  managerId,
  handleTeamPreviewModal,
  fetchTeam,
}) => {
  useEffect(() => {
    fetchCurrentLeagues();
    setTimeout(() => {
      managerIsRegistered();
    }, 2000);
  }, []);
  return (
    <div className="leagues">
      {leagues.map((league) => (
        <League
          key={league.gameWeek}
          gameWeek={league.gameWeek}
          status={league.aasmState}
          slug={league.slug}
          canCompose={league.canCompose}
          registered={registered}
          maxPlaces={league.max_places}
          lockedPlaces={league.locked_places}
          fetchManagers={fetchManagers}
          managers={league.registeredManagers}
          managerId={managerId}
          handleTeamPreviewModal={handleTeamPreviewModal}
          fetchTeam={fetchTeam}
        />
      ))}
    </div>
  );
};

Leagues.propTypes = {
  fetchCurrentLeagues: PropTypes.func.isRequired,
  leagues: PropTypes.array.isRequired,
  registered: PropTypes.bool,
  managerIsRegistered: PropTypes.func.isRequired,
  fetchManagers: PropTypes.func.isRequired,
  managerId: PropTypes.string.isRequired,
  handleTeamPreviewModal: PropTypes.func.isRequired,
  fetchTeam: PropTypes.func.isRequired,
};

Leagues.defaultProps = {
  registered: null,
};

export default Leagues;

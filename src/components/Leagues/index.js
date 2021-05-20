import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import League from './League';

const Leagues = ({
  fetchCurrentLeagues,
  leagues,
  registered,
  managerIsRegistered,
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
};

Leagues.defaultProps = {
  registered: null,
};

export default Leagues;

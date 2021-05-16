import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import League from './League';

const Leagues = ({
  fetchCurrentLeagues,
  leagues,
}) => {
  useEffect(() => {
    fetchCurrentLeagues();
  }, []);

  return (
    <div className="leagues">
      {leagues.map((league) => (
        <League
          gameWeek={league.gameWeek}
          status={league.aasmState}
          slug={league.slug}
          canCompose={league.canCompose}
        />
      ))}
    </div>
  );
};

Leagues.propTypes = {
  fetchCurrentLeagues: PropTypes.func.isRequired,
  leagues: PropTypes.array.isRequired,
};

export default Leagues;

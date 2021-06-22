import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Infos = ({
  awayTeam,
  awayTeamPicture,
  homeTeam,
  homeTeamPicture,
  league,
}) => (
  <li className="infos">
    <div className="infos__container">
      <img
        src={awayTeamPicture}
        alt={`logo of ${awayTeam}`}
        className="infos__clubPicture"
      />
      <p className="infos__clubName">{awayTeam}</p>
    </div>
    <div className="infos__container">
      <img
        src={homeTeamPicture}
        alt={`logo of ${homeTeam}`}
        className="infos__clubPicture"
      />
      <p className="infos__clubName">{homeTeam}</p>
    </div>
    { league && (
    <p className="infos__game-week">{league.gameWeek}</p>
    )}
  </li>
);

Infos.propTypes = {
  awayTeam: PropTypes.string.isRequired,
  awayTeamPicture: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  homeTeamPicture: PropTypes.string.isRequired,
  league: PropTypes.shape({
    gameWeek: PropTypes.number,
    aasmState: PropTypes.string,
  }),
};

Infos.defaultProps = {
  league: null,
};

export default Infos;

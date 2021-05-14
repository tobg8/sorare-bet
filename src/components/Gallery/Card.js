import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import colorizeScore from 'src/selectors/colorizeScore';

import Infos from './Infos';

const Card = ({
  url,
  last5Score,
  upcomingGames,
}) => {
  const ok = 'truc';

  return (
    <div className="card">
      <img
        src={url}
        alt="card player"
        className="card__picture"
      />
      <div className="card__infos">
        <div
          className="card__last-five-score"
          style={colorizeScore(last5Score)}
        >
          {Math.round(last5Score)}
        </div>
        <div className="card__games-container">
          {
          upcomingGames.length > 0
            ? (
              upcomingGames.map((game) => (
                <Infos
                  key={game.id}
                  awayTeam={game.away.name}
                  awayTeamPicture={game.away.pictureUrl}
                  homeTeam={game.home.name}
                  homeTeamPicture={game.home.pictureUrl}
                  league={game.so5Fixture}
                />
              ))
            )
            : (
              <div className="card__no-games">No games</div>
            )

        }
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  last5Score: PropTypes.number.isRequired,
  upcomingGames: PropTypes.arrayOf(
    PropTypes.shape({
      awayTeam: PropTypes.string,
      awayTeamPicture: PropTypes.string,
      homeTeam: PropTypes.string,
      homeTeamPicture: PropTypes.string,
      leagueNumber: PropTypes.number,
      leagueStatus: PropTypes.string,
    }),
  ),
};

Card.defaultProps = {
  upcomingGames: [],
};

export default Card;

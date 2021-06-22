import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import colorizeScore from 'src/selectors/colorizeScore';

import Infos from './Infos';

const Card = ({
  url,
  last5Score,
  upcomingGames,
  className,
  modifier,
  cardModifier,
  addCard,
  rarity,
  name,
}) => {
  const ok = 'truc';
  return (
    <div
      className={`card ${className}`}
      onClick={() => {
        if (addCard) {
          addCard(url, rarity, name, last5Score, upcomingGames);
        }
      }}
    >
      <img
        src={url}
        alt="card player"
        className={`card__picture ${cardModifier}`}
      />
      <div className={`card__infos ${modifier}`}>
        <div
          className="card__last-five-score"
          style={colorizeScore(last5Score)}
        >
          {Math.round(last5Score)}
        </div>
        <div className="card__games-container">
          {
          upcomingGames && upcomingGames.length > 0 && upcomingGames !== null
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
  className: PropTypes.string,
  modifier: PropTypes.string,
  cardModifier: PropTypes.string,
  addCard: PropTypes.func,
  rarity: PropTypes.string,
  name: PropTypes.string,
};

Card.defaultProps = {
  upcomingGames: [],
  className: '',
  modifier: '',
  cardModifier: '',
  addCard: null,
  rarity: '',
  name: '',
};

export default Card;

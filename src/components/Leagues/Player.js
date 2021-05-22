import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Player = ({ manager }) => {
  const ok = 'truc';

  return (
    <div className="player">
      <section className="player__container-infos-manager">
        <p className="player__infos-name">{manager.manager_name}</p>
        <img className="player__infos-picture" src={manager.manager_picture} alt={`manager ${manager.manager_name}`} />
      </section>
      <section className="player__container-team-manager">
        {manager.cards.map((card) => (
          <div className="player__container-card">
            <img className="player__team-card" src={card.picture_url} alt={`card of player ${card.slug}`} key={card.id} />
          </div>
        ))}
      </section>
      <div className="player__total-score">
        <p className="player__score">Total Score</p>
        <p className="player__score">{manager.total_score}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  manager: PropTypes.shape({
    manager_name: PropTypes.string.isRequired,
    manager_id: PropTypes.string.isRequired,
    manager_picture: PropTypes.string.isRequired,
    total_score: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
};

export default Player;

import React, { useEffect } from 'react';
import './styles.scss';
import Card from 'src/components/Gallery/Card';
import PropTypes from 'prop-types';

import plus from 'src/assets/images/plus.svg';

const CreateTeam = ({
  fetchCards,
  cards,
}) => {
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="interface">
      <div className="interface__deck">
        {cards.map((card) => (
          <Card
            key={card.id}
            url={card.pictureUrl}
            last5Score={card.player.status.lastFiveSo5AverageScore}
            upcomingGames={card.player.activeClub.upcomingGames}
            className="interface__card"
            modifier="interface__card--modifier"
            cardModifier="interface__card-picture--modifier"
          />
        ))}
      </div>
      <div className="interface__build">
        <div className="interface__slot">
          <p className="interface__role">Goalkeeper</p>
          <img className="interface__plus-icon" alt="plus icon" src={plus} />
        </div>
        <div className="interface__slot">
          <p className="interface__role">Defender</p>
          <img className="interface__plus-icon" alt="plus icon" src={plus} />
        </div>
        <div className="interface__slot">
          <p className="interface__role">Midlefielder</p>
          <img className="interface__plus-icon" alt="plus icon" src={plus} />
        </div>
        <div className="interface__slot">
          <p className="interface__role">Forward</p>
          <img className="interface__plus-icon" alt="plus icon" src={plus} />
        </div>
        <div className="interface__slot">
          <p className="interface__role">Extra</p>
          <img className="interface__plus-icon" alt="plus icon" src={plus} />
        </div>
      </div>
    </div>
  );
};

CreateTeam.propTypes = {
  cards: PropTypes.array,
  fetchCards: PropTypes.func.isRequired,
};

CreateTeam.defaultProps = {
  cards: [],
};

export default CreateTeam;

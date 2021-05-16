import React, { useEffect } from 'react';
import './styles.scss';
import filterCardsByPosition from 'src/selectors/filterCardsByPosition';
import Card from 'src/components/Gallery/Card';
import PropTypes from 'prop-types';
import Slot from './Slot';

const CreateTeam = ({
  fetchCards,
  cards,
  chooseRole,
  slots,
  activePosition,
}) => {
  useEffect(() => {
    fetchCards();
  }, []);
  if (activePosition) {
    filterCardsByPosition(activePosition[0], cards);
  }

  return (
    <div className="interface">
      <div className="interface__deck">
        {activePosition ? filterCardsByPosition(activePosition[0], cards).map((card) => (
          <Card
            key={card.id}
            url={card.pictureUrl}
            last5Score={card.player.status.lastFiveSo5AverageScore}
            upcomingGames={card.player.activeClub.upcomingGames}
            className="interface__card"
            modifier="interface__card--modifier"
            cardModifier="interface__card-picture--modifier"
          />
        )) : cards.map((card) => (
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
        {slots.map((slot) => (
          <Slot
            key={slot.position}
            position={slot.position}
            chooseRole={chooseRole}
            active={slot.active}
          />
        ))}
      </div>
    </div>
  );
};

CreateTeam.propTypes = {
  cards: PropTypes.array,
  fetchCards: PropTypes.func.isRequired,
  chooseRole: PropTypes.func.isRequired,
  slots: PropTypes.array.isRequired,
  activePosition: PropTypes.array,
};

CreateTeam.defaultProps = {
  cards: [],
  activePosition: null,
};

export default CreateTeam;

import React, { useEffect } from 'react';
import './styles.scss';
import filterCardsByPosition from 'src/selectors/filterCardsByPosition';
import checkTeamDoublon from 'src/selectors/checkTeamDoublon';
import checkRarityDoublon from 'src/selectors/checkRarityDoublon';
import teamIsFull from 'src/selectors/teamIsFull';
import Card from 'src/components/Gallery/Card';
import PropTypes from 'prop-types';
import Slot from './Slot';

const CreateTeam = ({
  fetchCards,
  cards,
  chooseRole,
  slots,
  activePosition,
  addCard,
}) => {
  useEffect(() => {
    fetchCards();
  }, []);
  teamIsFull(slots);
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
            addCard={addCard}
            rarity={card.rarity}
            name={card.slug}
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
            addCard={addCard}
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
            url={slot.url}
          />
        ))}
        {checkTeamDoublon(slots) === false && (
          <div className="interface__error">Same card used twice</div>
        )}
        {checkRarityDoublon(slots) === false && (
          <div className="interface__error">One max common</div>
        )}
        {checkRarityDoublon(slots) === true
         && checkTeamDoublon(slots) === true
          && teamIsFull(slots).length === 0 && (
          <button type="button" className="interface__submit-team">
            Submit Team
          </button>
        )}
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
  addCard: PropTypes.func.isRequired,
};

CreateTeam.defaultProps = {
  cards: [],
  activePosition: null,
};

export default CreateTeam;

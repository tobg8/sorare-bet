import React, { useEffect } from 'react';
import './styles.scss';
import filterCardsByPosition from 'src/selectors/filterCardsByPosition';
import checkTeamDoublon from 'src/selectors/checkTeamDoublon';
import checkRarityDoublon from 'src/selectors/checkRarityDoublon';
import checkCookie from 'src/selectors/checkCookie';
import teamIsFull from 'src/selectors/teamIsFull';
import checkNextMatchPlayer from 'src/selectors/checkNextMatchPlayer';
import checkAvgScore from 'src/selectors/checkAvgScore';
import Card from 'src/components/Gallery/Card';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
import Slot from './Slot';

const CreateTeam = ({
  fetchCards,
  cards,
  chooseRole,
  slots,
  activePosition,
  addCard,
  registerToLeague,
  registered,
  logout,
  logged,
  saveJwtCookie,
  currentGW,
}) => {
  const history = useHistory();
  useEffect(() => {
    const string = localStorage.getItem('jwt');
    if (!string) {
      logout();
      history.push('/');
    }
    if (string) {
      checkCookie(string);
      if (checkCookie(string)) {
        // If we get cookie with timestamp < 20 mins
        // parse cookie
        const correctCookie = JSON.parse(string);
        // we save JWT for request
        saveJwtCookie(correctCookie.value);
      }
    }
    fetchCards();
  }, []);
  if (currentGW.length === 0) {
    history.push('/');
  }
  if (registered) {
    return <Redirect to="/" />;
  }
  setTimeout(() => {
    if (!logged) {
      return <Redirect to="/" />;
    }
    return true;
  }, 3000);

  // checkAvgScore(slots);
  // if (currentGW.length > 0) {
  //   console.log(checkNextMatchPlayer(currentGW, cards));
  // }

  teamIsFull(slots);
  // We need to filter cards that has no upcomingGames in this GW.

  return (
    <div className="interface">
      <div className="interface__deck">
        {activePosition
        && checkNextMatchPlayer(currentGW, cards).length > 0
          ? filterCardsByPosition(activePosition[0],
            checkNextMatchPlayer(currentGW, cards)).map((card) => (
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
          )) : checkNextMatchPlayer(currentGW, cards).map((card) => (
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
        {checkAvgScore(slots) === false && (
          <div className="interface__error">Card must have 45 or less average score</div>
        )}
        {checkRarityDoublon(slots) === false && (
          <div className="interface__error">One max common</div>
        )}
        {checkNextMatchPlayer(currentGW, cards).length < 5 && (
          <div className="interface__error">You don't have enough players that plays this week</div>
        )}
        {checkRarityDoublon(slots) === true
         && checkTeamDoublon(slots) === true
          && checkAvgScore(slots) === true
          && teamIsFull(slots).length === 0 && (
          <button
            type="button"
            className="interface__submit-team"
            onClick={registerToLeague}
          >
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
  registerToLeague: PropTypes.func.isRequired,
  registered: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  logged: PropTypes.bool,
  saveJwtCookie: PropTypes.func.isRequired,
  currentGW: PropTypes.arrayOf(PropTypes.shape({
    gameWeek: PropTypes.number.isRequired,
  })),
};

CreateTeam.defaultProps = {
  cards: [],
  activePosition: null,
  registered: null,
  logged: null,
  currentGW: null,
};

export default CreateTeam;

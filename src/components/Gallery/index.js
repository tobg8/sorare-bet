import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';
import './styles.scss';

import checkCookie from 'src/selectors/checkCookie';
import Loader from 'react-loader-spinner';
import Card from './Card';

const Gallery = ({
  logged,
  fetchCards,
  cards,
  saveJwtCookie,
  logout,
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

  // i feel like this trigger before our saveJwtCookie action being dispatched
  // and processed so we get redirected even if we are logged in.
  setTimeout(() => {
    if (!logged) {
      return <Redirect to="/" />;
    }
    return true;
  }, 3000);
  
  return (
    <div className="gallery">
      {cards.length > 0 ? (
        cards.map((card) => (
          <Card
            key={card.id}
            url={card.pictureUrl}
            last5Score={card.player.status.lastFiveSo5AverageScore}
            upcomingGames={card.player.activeClub.upcomingGames}
          />
        ))

      ) : (
        <Loader
          type="Circles"
          color="#369496"
          height={80}
          width={80}
          className="gallery__spinner"
        />
      )}
    </div>
  );
};

Gallery.propTypes = {
  logged: PropTypes.bool,
  fetchCards: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      rarity: PropTypes.string.isRequired,
      pictureUrl: PropTypes.string.isRequired,
    }),
  ),
  saveJwtCookie: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

Gallery.defaultProps = {
  logged: null,
  cards: null,
};

export default Gallery;

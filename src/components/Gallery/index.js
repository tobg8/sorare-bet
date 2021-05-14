import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';
import './styles.scss';

import Loader from 'react-loader-spinner';
import Card from './Card';

const Gallery = ({
  logged,
  fetchCards,
  cards,
}) => {
  useEffect(() => {
    fetchCards();
  }, []);

  if (!logged) {
    return <Redirect to="/" />;
  }

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
};

Gallery.defaultProps = {
  logged: null,
  cards: null,
};

export default Gallery;

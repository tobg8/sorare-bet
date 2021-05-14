import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import colorizeScore from 'src/selectors/colorizeScore';

const Card = ({
  url,
  last5Score,
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
        <div>next Match</div>
        <div>next Match</div>
        <div>next Match</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  last5Score: PropTypes.number.isRequired,
};

export default Card;

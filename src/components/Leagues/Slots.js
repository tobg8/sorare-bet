import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Slots = ({
  gameWeek,
  fetchSlots,
  maxPlaces,
  lockedPlaces,
}) => {
  useEffect(() => {
    fetchSlots(gameWeek);
  }, [lockedPlaces]);

  return (
    <div className="slots">
      <div className="slots__unit">{lockedPlaces}</div>
      <p className="slots__divider">---</p>
      <div className="slots__unit">{maxPlaces}</div>
    </div>
  );
};

Slots.propTypes = {
  gameWeek: PropTypes.number.isRequired,
  fetchSlots: PropTypes.func.isRequired,
};

Slots.propTypes = {
  maxPlaces: PropTypes.number.isRequired,
  lockedPlaces: PropTypes.number.isRequired,
};

export default Slots;

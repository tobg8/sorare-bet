import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import plus from 'src/assets/images/plus.svg';

const Slot = ({
  position,
  chooseRole,
  active,
}) => {
  const handleChooseRole = () => {
    chooseRole(position);
  };

  return (
    <div
      className={active ? 'slot slot--active' : 'slot'}
      id={`${position}`}
      onClick={handleChooseRole}
    >
      <p className="slot__role">{position}</p>
      <img className="slot__plus-icon" alt="plus icon" src={plus} />
    </div>
  );
};

Slot.propTypes = {
  position: PropTypes.string.isRequired,
  chooseRole: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Slot;

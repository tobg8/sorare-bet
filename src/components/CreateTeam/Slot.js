import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import plus from 'src/assets/images/plus.svg';

const Slot = ({
  position,
  chooseRole,
  active,
  url,
}) => {
  const handleChooseRole = () => {
    chooseRole(position);
  };

  return (
    <div
      className={active ? 'slot slot--active' : 'slot'}
      id={`${position}`}
      onClick={handleChooseRole}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {!url && (
        <div className="slot__infos-container">
          <p className="slot__role">{position}</p>
          <img className="slot__plus-icon" alt="plus icon" src={plus} />
        </div>
      )}
    </div>
  );
};

Slot.propTypes = {
  position: PropTypes.string.isRequired,
  chooseRole: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};

export default Slot;

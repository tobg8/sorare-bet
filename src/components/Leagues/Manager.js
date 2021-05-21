import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Manager = ({ manager }) => {
  const ok = 'truc';
  return (
    <div className="manager__container">
      <div className="manager__avatar-container">
        <img className="manager__avatar" src={manager.manager_picture} alt="manager avatar" />
      </div>
      <div className="manager__tooltip">{manager.manager_name.substring(0, 5)}</div>
    </div>
  );
};

Manager.propTypes = {
  manager: PropTypes.shape({
    manager_name: PropTypes.string.isRequired,
    manager_picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    game_week: PropTypes.number.isRequired,
  }).isRequired,

};

export default Manager;

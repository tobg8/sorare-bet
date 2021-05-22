import React from 'react';
import './styles.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PropTypes from 'prop-types';
import Player from './Player';

const ShowTeams = ({
  gameWeek,
  modalStatus,
  openModal,
  closeModal,
  managers,
  fetchManagersFromLeague,
}) => {
  const watchLeagues = async () => {
    fetchManagersFromLeague(gameWeek);
    openModal();
  };

  return (
    <div className="league__show-league-teams">
      <p onClick={watchLeagues} className="league__show-league-teams--paragraph">Show all teams</p>
      <Modal
        open={modalStatus}
        classNames={{ modal: 'league__managers-league' }}
        onClose={closeModal}
      >
        {managers && (managers.map((manager) => <Player manager={manager} key={manager.id} />))}
      </Modal>
    </div>
  );
};

ShowTeams.propTypes = {
  gameWeek: PropTypes.number.isRequired,
  managers: PropTypes.array,
  modalStatus: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  fetchManagersFromLeague: PropTypes.func.isRequired,
};

ShowTeams.defaultProps = {
  managers: null,
};

export default ShowTeams;

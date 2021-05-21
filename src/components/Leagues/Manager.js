import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './styles.scss';

import PropTypes from 'prop-types';

const Manager = ({
  manager,
  modalStatus,
  handleTeamPreviewModal,
  closeTeamPreviewModal,
  fetchTeam,
  teamComp,
}) => {
  const FetchManagerTeam = () => {
    fetchTeam(manager.id, manager.game_week);
    handleTeamPreviewModal();
  };
  return (
    <div className="manager__container">
      <div className="manager__avatar-container" onClick={FetchManagerTeam}>
        <img className="manager__avatar" src={manager.manager_picture} alt="manager avatar" />
      </div>
      <div className="manager__tooltip">{manager.manager_name.substring(0, 5)}</div>
      <Modal
        open={modalStatus}
        onClose={closeTeamPreviewModal}
        className="manager__team-modal"
        classNames={{ modal: 'manager__team-modal' }}
      >
        {
        teamComp.length > 0 && (teamComp.map((card) => (
          <div className="manager__card-container" key={card.id}>
            <img className="manager__card" src={card.picture_url} alt={card.slug} />
          </div>
        )))
        }
      </Modal>
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
  modalStatus: PropTypes.bool.isRequired,
  handleTeamPreviewModal: PropTypes.func.isRequired,
  closeTeamPreviewModal: PropTypes.func.isRequired,
  fetchTeam: PropTypes.func.isRequired,
  teamComp: PropTypes.array.isRequired,
};

export default Manager;

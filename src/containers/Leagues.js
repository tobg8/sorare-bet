import { connect } from 'react-redux';
import Leagues from 'src/components/Leagues';

import {
  fetchCurrentLeagues,
  fetchManagers,
  handleTeamPreviewModal,
  closeTeamPreviewModal,
  fetchTeam,
} from 'src/actions/interface';

import {
  managerIsRegistered,
} from 'src/actions/register';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  leagues: state.app.leagues,
  registered: state.app.registered,
  managerId: state.userData.infos.id,
  modalStatus: state.app.teamPreview.status,
  teamComp: state.app.teamPreview.teamComp,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentLeagues: () => {
    dispatch(fetchCurrentLeagues());
  },
  managerIsRegistered: () => {
    dispatch(managerIsRegistered());
  },
  fetchManagers: (gameWeek) => {
    dispatch(fetchManagers(gameWeek));
  },
  handleTeamPreviewModal: () => {
    dispatch(handleTeamPreviewModal());
  },
  closeTeamPreviewModal: () => {
    dispatch(closeTeamPreviewModal());
  },
  fetchTeam: (registrationId, gameWeek) => {
    dispatch(fetchTeam(registrationId, gameWeek));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);

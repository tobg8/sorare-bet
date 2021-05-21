import { connect } from 'react-redux';
import Manager from 'src/components/Leagues/Manager';

import {
  handleTeamPreviewModal,
  closeTeamPreviewModal,
  fetchTeam,
} from 'src/actions/interface';

const mapStateToProps = (state) => ({
  modalStatus: state.app.teamPreview.status,
  teamComp: state.app.teamPreview.teamComp,
});

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Manager);

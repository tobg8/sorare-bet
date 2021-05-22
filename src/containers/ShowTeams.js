import { connect } from 'react-redux';
import ShowTeams from 'src/components/Leagues/ShowTeams';

import {
  openLeagueInfosModal,
  closeLeagueInfosModal,
  fetchManagersFromLeague,
} from 'src/actions/leaguesInfos';

const mapStateToProps = (state) => ({
  modalStatus: state.showTeams.modalStatus,
  managers: state.showTeams.managers,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    dispatch(openLeagueInfosModal());
  },
  closeModal: () => {
    dispatch(closeLeagueInfosModal());
  },
  fetchManagersFromLeague: (gameWeek) => {
    dispatch(fetchManagersFromLeague(gameWeek));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTeams);

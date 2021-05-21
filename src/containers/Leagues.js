import { connect } from 'react-redux';
import Leagues from 'src/components/Leagues';

import {
  fetchCurrentLeagues,
  fetchManagers,
} from 'src/actions/interface';

import {
  managerIsRegistered,
} from 'src/actions/register';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  leagues: state.app.leagues,
  registered: state.app.registered,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);

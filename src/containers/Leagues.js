import { connect } from 'react-redux';
import Leagues from 'src/components/Leagues';

import {
  fetchCurrentLeagues,
} from 'src/actions/interface';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  leagues: state.app.leagues,
  registered: state.app.registered,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentLeagues: () => {
    dispatch(fetchCurrentLeagues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);

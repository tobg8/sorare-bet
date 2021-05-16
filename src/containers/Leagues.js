import { connect } from 'react-redux';
import Leagues from 'src/components/Leagues';

import {
  fetchCurrentLeagues,
} from 'src/actions/interface';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  leagues: state.app.leagues,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentLeagues: () => {
    dispatch(fetchCurrentLeagues());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);

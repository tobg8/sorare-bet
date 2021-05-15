import { connect } from 'react-redux';
import Home from 'src/components/Home';

import {
  logout,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

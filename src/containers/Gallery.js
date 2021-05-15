import { connect } from 'react-redux';
import Gallery from 'src/components/Gallery';

import {
  fetchCards,
} from 'src/actions/userData';

import {
  saveJwtCookie,
  logout,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  cards: state.userData.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    dispatch(fetchCards());
  },
  saveJwtCookie: (jwt) => {
    dispatch(saveJwtCookie(jwt));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

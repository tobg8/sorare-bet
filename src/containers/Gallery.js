import { connect } from 'react-redux';
import Gallery from 'src/components/Gallery';

import {
  fetchCards,
} from 'src/actions/userData';

const mapStateToProps = (state) => ({
  logged: state.connection.user.logged,
  cards: state.userData.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    dispatch(fetchCards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

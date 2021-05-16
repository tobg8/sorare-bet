import { connect } from 'react-redux';
import CreateTeam from 'src/components/CreateTeam';

import {
  fetchCards,
} from 'src/actions/userData';

const mapStateToProps = (state) => ({
  cards: state.userData.cards,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    dispatch(fetchCards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);

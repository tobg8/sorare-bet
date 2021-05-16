import { connect } from 'react-redux';
import CreateTeam from 'src/components/CreateTeam';

import {
  fetchCards,
} from 'src/actions/userData';

import {
  chooseRole,
  addCard,
} from 'src/actions/interface';

const mapStateToProps = (state) => ({
  cards: state.userData.cards,
  slots: state.app.team,
  activePosition: state.app.team.filter((slot) => {
    if (slot.active === true) {
      return slot.position;
    }
    return null;
  }),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => {
    dispatch(fetchCards());
  },
  chooseRole: (position) => {
    dispatch(chooseRole(position));
  },
  addCard: (url, rarity, name) => {
    dispatch(addCard(url, rarity, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);

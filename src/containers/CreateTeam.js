import { connect } from 'react-redux';
import CreateTeam from 'src/components/CreateTeam';

import {
  fetchCards,
} from 'src/actions/userData';

import {
  saveJwtCookie,
  logout,
} from 'src/actions/connection';

import {
  chooseRole,
  addCard,
} from 'src/actions/interface';

import {
  registerToLeague,
} from 'src/actions/register';

const mapStateToProps = (state) => ({
  cards: state.userData.cards,
  slots: state.app.team,
  activePosition: state.app.team.filter((slot) => {
    if (slot.active === true) {
      return slot.position;
    }
    return null;
  }),
  registered: state.app.registered,
  logged: state.connection.user.logged,
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
  registerToLeague: () => {
    dispatch(registerToLeague());
  },
  saveJwtCookie: (jwt) => {
    dispatch(saveJwtCookie(jwt));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);

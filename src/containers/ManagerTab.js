import { connect } from 'react-redux';
import ManagerTab from 'src/components/ManagerTab';

import {
  fetchUserInfos,
} from 'src/actions/userData';

import {
  handleHiddenMenu,
} from 'src/actions/interface';

import {
  saveJwtCookie,
  logout,
} from 'src/actions/connection';

import {
  managerIsRegistered,
} from 'src/actions/register';

const mapStateToProps = (state) => ({
  infoReceived: state.userData.infoReceived,
  slug: state.userData.infos.slug,
  picture: state.userData.infos.profile.pictureUrl,
  managerId: state.userData.infos.id,
  gameWeek: state.app.leagues.filter((league) => league.aasmState === 'opened'),
  hiddenMenuOpen: state.app.menuStatus,
  logged: state.connection.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfos: () => {
    dispatch(fetchUserInfos());
  },
  handleHiddenMenu: () => {
    dispatch(handleHiddenMenu());
  },
  saveJwtCookie: (jwt) => {
    dispatch(saveJwtCookie(jwt));
  },
  managerIsRegistered: (gameWeek, managerId) => {
    dispatch(managerIsRegistered(gameWeek, managerId));
  },
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerTab);

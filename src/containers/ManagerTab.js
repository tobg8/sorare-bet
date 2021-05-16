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
  logout: () => {
    dispatch(logout());
  },
  managerIsRegistered: () => {
    dispatch(managerIsRegistered());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerTab);

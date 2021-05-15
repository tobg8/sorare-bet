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
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  infoReceived: state.userData.infoReceived,
  slug: state.userData.infos.slug,
  picture: state.userData.infos.profile.pictureUrl,
  hiddenMenuOpen: state.app.menuStatus,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerTab);

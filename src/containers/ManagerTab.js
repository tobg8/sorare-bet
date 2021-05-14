import { connect } from 'react-redux';
import ManagerTab from 'src/components/ManagerTab';

import {
  fetchUserInfos,
} from 'src/actions/userData';

const mapStateToProps = (state) => ({
  infoReceived: state.userData.infoReceived,
  slug: state.userData.infos.slug,
  picture: state.userData.infos.profile.pictureUrl,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfos: () => {
    dispatch(fetchUserInfos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagerTab);

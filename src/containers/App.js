import { connect } from 'react-redux';
import App from 'src/components/App';

import {
  saveJwtCookie,
} from 'src/actions/connection';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  saveJwtCookie: (jwt) => {
    dispatch(saveJwtCookie(jwt));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

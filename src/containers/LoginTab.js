import { connect } from 'react-redux';
import LoginTab from 'src/components/LoginTab';
import {
  openLoginForm,
  closeLoginForm,
  changeLoginField,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  loginStatus: state.connection.loginStatus,
  email: state.connection.user.email,
  password: state.connection.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  openLogin: () => {
    dispatch(openLoginForm());
  },
  closeLogin: () => {
    dispatch(closeLoginForm());
  },
  changeLoginField: (value, name) => {
    dispatch(changeLoginField(value, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTab);

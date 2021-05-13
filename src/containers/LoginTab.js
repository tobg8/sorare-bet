import { connect } from 'react-redux';
import LoginTab from 'src/components/LoginTab';
import {
  openLoginForm,
  closeLoginForm,
  changeLoginField,
  loginAction,
  closeDoubleAuth,
  changeOtpCode,
  doubleAuthLogin,
} from 'src/actions/connection';

const mapStateToProps = (state) => ({
  loginStatus: state.connection.loginStatus,
  email: state.connection.user.email,
  password: state.connection.user.password,
  openDoubleAuth: state.connection.doubleAuth,
  doubleAuthCode: state.connection.user.otpCode,
  authError: state.connection.user.authError,
  error: state.connection.user.error,
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
  loginAction: () => {
    dispatch(loginAction());
  },
  closeDoubleAuth: () => {
    dispatch(closeDoubleAuth());
  },
  changeOtpCode: (value) => {
    dispatch(changeOtpCode(value));
  },
  doubleAuthLogin: () => {
    dispatch(doubleAuthLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginTab);

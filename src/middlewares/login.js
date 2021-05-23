import axios from 'axios';

// Actions
import {
  LOGIN_ACTION,
  saveOtpSession,
  loginFailed,
  DOUBLE_AUTH_LOGIN,
  doubleAuthFailed,
  loginSuccess,
} from 'src/actions/connection';

const login = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const userLogin = async () => {
        const state = store.getState();
        // retrieve hashedPassword
        const saltUrl = `${process.env.REACT_APP_PRODUCTION_URL}/salt`;
        try {
          const response = await axios.post(saltUrl, {
            email: state.connection.user.email,
            password: state.connection.user.password,
          });
          const hashedPassword = response.data.saltyPassword;

          // Try to log with email and hashedPassword,
          // if there is 2FA security this will return an otpSessionChallenge.

          const loginUrl = `${process.env.REACT_APP_PRODUCTION_URL}/login`;
          const tryLogin = await axios.post(loginUrl, {
            email: state.connection.user.email,
            password: hashedPassword,
          });

          // If we get an otpSessionChallenge
          if (tryLogin.data.otpSessionChallenge) {
            // we dispatch an action to open modal + save the otpSession
            store.dispatch(saveOtpSession(tryLogin.data.otpSessionChallenge));
          }

          // !if we get JWT then we good do something here
        }
        catch (error) {
          // Si nous avons une 404 alors l'user n'existe pas.
          if (error.response.status === 404) {
            store.dispatch(loginFailed(error.response.data.error));
          }
        }
      };
      userLogin();
      break;
    }
    case DOUBLE_AUTH_LOGIN: {
      const securedAuth = async () => {
        const state = store.getState();
        const url = `${process.env.REACT_APP_PRODUCTION_URL}/auth`;
        try {
          const response = await axios.post(url, {
            otpSessionChallenge: state.connection.user.otpSessionChallenge,
            otpAttempt: state.connection.user.otpCode,
          });
          if (response.status === 200) {
            // console.log(response.data);
            store.dispatch(loginSuccess(response.data));
            // We set the jwt in localStorage
            const cookie = { value: response.data.jwtToken.token, timestamp: new Date().getTime() };
            localStorage.setItem('jwt', JSON.stringify(cookie));
          }
        }
        catch (error) {
          if (error.response.status === 400) {
            store.dispatch(doubleAuthFailed(error.response.data.error));
          }
        }
      };
      securedAuth();
      break;
    }
    default:
      next(action);
  }
};

export default login;

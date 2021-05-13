import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import loginPolygon from 'src/assets/images/login-polygon.svg';
import PropTypes from 'prop-types';
import ErrorMessage from 'src/components/ErrorMessage';
import InputLogin from './InputLogin';
import './styles.scss';

const LoginTab = ({
  loginStatus,
  openLogin,
  closeLogin,
  email,
  password,
  changeLoginField,
  loginAction,
  openDoubleAuth,
  doubleAuthCode,
  closeDoubleAuth,
  changeOtpCode,
  doubleAuthLogin,
  authError,
  error,
}) => {
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    loginAction();
    // We close loginModal too
    closeLogin();
  };

  const handleDoubleAuth = (event) => {
    event.preventDefault();
    doubleAuthLogin();
    closeDoubleAuth();
  };

  return (
    <div className="logintab">
      <img
        src={loginPolygon}
        alt=""
        className="logintab__svg"
      />
      <button
        type="button"
        className="logintab__button"
        onClick={openLogin}
      >
        login
      </button>
      <p className="logintab__link">
        No account ?
        <a
          href="https://sorare.com/"
          className="logintab__link--modifier"
          target="_blank"
          rel="noreferrer"
        >
          Create one now !
        </a>
      </p>
      <Modal
        open={loginStatus}
        onClose={closeLogin}
      >
        <form className="logintab__login-form">
          {error && (
            <ErrorMessage content="email or password incorrect" />
          )}
          <InputLogin
            name="email"
            placeholder="email"
            value={email}
            onChange={changeLoginField}
          />
          <InputLogin
            name="password"
            placeholder="password"
            value={password}
            onChange={changeLoginField}
            type="password"
          />
          <button
            type="submit"
            className="logintab__login-button"
            onClick={handleSubmitLogin}
          >
            Login
          </button>
        </form>
      </Modal>
      <Modal
        open={openDoubleAuth}
        onClose={closeDoubleAuth}
      >
        <form className="logintab__login-form">
          {authError && (
            <ErrorMessage content="invalid code" />
          )}
          <InputLogin
            name="otpCode"
            placeholder="2FA code"
            value={doubleAuthCode}
            onChange={changeOtpCode}
          />
          <button
            type="submit"
            className="logintab__login-button"
            onClick={handleDoubleAuth}
          >
            Login
          </button>
        </form>
      </Modal>
    </div>
  );
};

LoginTab.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  openLogin: PropTypes.func.isRequired,
  closeLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeLoginField: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  openDoubleAuth: PropTypes.bool.isRequired,
  doubleAuthCode: PropTypes.string.isRequired,
  closeDoubleAuth: PropTypes.func.isRequired,
  changeOtpCode: PropTypes.func.isRequired,
  doubleAuthLogin: PropTypes.func.isRequired,
  authError: PropTypes.string,
  error: PropTypes.string,
};

LoginTab.defaultProps = {
  authError: null,
  error: null,
};

export default LoginTab;

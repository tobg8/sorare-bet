import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import loginPolygon from 'src/assets/images/login-polygon.svg';
import PropTypes from 'prop-types';
import InputLogin from './InputLogin';
import './styles.scss';

const LoginTab = ({
  loginStatus,
  openLogin,
  closeLogin,
  email,
  password,
  changeLoginField,
}) => {
  const ok = 'truc';

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
        className="logintab__login-modal"
        onClose={closeLogin}
      >
        <form className="logintab__login-form">
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
          />
          <button
            type="submit"
            className="logintab__login-button"
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
};

export default LoginTab;

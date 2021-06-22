import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';
import './styles.scss';
import checkCookie from 'src/selectors/checkCookie';

import Loader from 'react-loader-spinner';

const ManagerTab = ({
  fetchUserInfos,
  infoReceived,
  slug,
  picture,
  handleHiddenMenu,
  hiddenMenuOpen,
  saveJwtCookie,
  managerIsRegistered,
  logout,
}) => {
  const string = localStorage.getItem('jwt');
  useEffect(() => {
    if (string) {
      checkCookie(string);
      if (checkCookie(string)) {
        // If we get cookie with timestamp < 20 mins
        // parse cookie
        const correctCookie = JSON.parse(string);
        // we save JWT for request
        saveJwtCookie(correctCookie.value);
      }
    }
    fetchUserInfos();
    setTimeout(() => {
      managerIsRegistered();
    }, 4000);
  }, []);

  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div className="manager-tab">
      <section className="manager-tab__container">
        <div className="manager-tab__left">
          <Link to="/gallery" className="manager-tab__gallery">Galerie</Link>
        </div>
        {infoReceived
          ? (
            <div
              className="manager-tab__right"
              onClick={handleHiddenMenu}
            >
              <img
                src={picture}
                alt="manager avatar"
                className="manager-tab__picture"
              />
              <p className="manager-tab__slug-container">{slug}</p>
              <ul className="manager-tab__hidden-menu" style={{ display: hiddenMenuOpen ? 'flex' : 'none' }}>
                <li className="manager-tab__menu-link" onClick={handleLogout}>logout</li>
              </ul>
            </div>
          )
          : (
            <div className="manager-tab__right">
              <Loader
                type="Circles"
                color="#0A0A0A"
                height={80}
                width={80}
              />
            </div>
          )}
      </section>
    </div>
  );
};

ManagerTab.propTypes = {
  fetchUserInfos: PropTypes.func.isRequired,
  infoReceived: PropTypes.bool.isRequired,
  slug: PropTypes.string,
  picture: PropTypes.string,
  handleHiddenMenu: PropTypes.func.isRequired,
  hiddenMenuOpen: PropTypes.bool.isRequired,
  saveJwtCookie: PropTypes.func.isRequired,
  managerIsRegistered: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

ManagerTab.defaultProps = {
  slug: null,
  picture: null,
};

export default ManagerTab;

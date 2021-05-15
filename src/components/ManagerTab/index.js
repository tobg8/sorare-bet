import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';
import './styles.scss';

import Loader from 'react-loader-spinner';

const ManagerTab = ({
  fetchUserInfos,
  infoReceived,
  slug,
  picture,
  handleHiddenMenu,
  hiddenMenuOpen,
}) => {
  useEffect(() => {
    fetchUserInfos();
  }, []);

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
                <li className="manager-tab__menu-link">logout</li>
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
};

ManagerTab.defaultProps = {
  slug: null,
  picture: null,
};

export default ManagerTab;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const ManagerTab = () => {
  const ok = 'truc';

  return (
    <div className="manager-tab">
      <section className="manager-tab__container">
        <div className="manager-tab__left">
          <Link to="/gallery" className="manager-tab__gallery">Galerie</Link>
        </div>
        <div className="manager-tab__right">
          <p className="manager-tab__avatar-container">img du manager</p>
          <p className="manager-tab__name-container">Prénom du manager</p>
          <ul className="manager-tab__hidden-menu">
            <li className="manager-tab__menu-link">logout</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ManagerTab;

import React from 'react';
import './styles.scss';

const Footer = () => {
  // const chromeNav = !!window.chrome;
  // console.log(chromeNav);
  const ok = 'truc';

  return (
    <div className="footer">
      <section className="footer__container">
        <div className="footer__link">Récompenses</div>
        <div className="footer__link">Mentions légales</div>
        <div className="footer__link">A propos</div>
      </section>
    </div>
  );
};

export default Footer;

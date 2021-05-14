import React from 'react';
import './styles.scss';
import footer from 'src/assets/images/footer.svg';

const Footer = () => {
  const truc = 'ok';

  return (
    <div className="footer">
      <img
        src={footer}
        alt=""
        className="footer__svg"
      />
      <section className="footer__container">
        <div>ok</div>
        <div className="footer__copyright">sorare bet ©</div>
        <div>azeazez</div>
      </section>
    </div>
  );
};

export default Footer;

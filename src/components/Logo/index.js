import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Logo = () => {
  const ok = 'truc';

  return (
    <div className="logo">
      <Link to="/home" className="logo__content">sorare league</Link>
    </div>
  );
};

export default Logo;

import React from 'react';
import './styles.scss';
import ballon from 'src/assets/images/ballon.svg';
import square from 'src/assets/images/square.svg';

const Soccer = () => {
  const ok = 'truc';

  return (
    <div className="soccer">
      <img src={ballon} alt="" className="soccer__ballon" />
      <img src={square} alt="" className="soccer__square soccer__square--1" />
      <img src={square} alt="" className="soccer__square soccer__square--2" />
      <img src={square} alt="" className="soccer__square soccer__square--3" />
    </div>
  );
};

export default Soccer;

import React from 'react';
import './styles.scss';

import League from './League';

const Leagues = () => {
  const ok = 'truc';

  return (
    <div className="leagues">
      <League />
      <League />
      <League />
    </div>
  );
};

export default Leagues;

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './styles.scss';

import ManagerTab from 'src/containers/ManagerTab';

const Home = ({ logged }) => {
  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home">
      <ManagerTab />
    </div>
  );
};

Home.propTypes = {
  logged: PropTypes.bool,
};

Home.defaultProps = {
  logged: null,
};

export default Home;

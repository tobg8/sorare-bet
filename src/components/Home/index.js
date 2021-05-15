import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
import './styles.scss';

import ManagerTab from 'src/containers/ManagerTab';
import Leagues from 'src/components/Leagues';

const Home = ({
  logged,
  logout,
}) => {
  const history = useHistory();
  useEffect(() => {
    const string = localStorage.getItem('jwt');
    if (!string) {
      logout();
      history.push('/');
    }
  });
  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home">
      <ManagerTab />
      <Leagues />
    </div>
  );
};

Home.propTypes = {
  logged: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

Home.defaultProps = {
  logged: null,
};

export default Home;

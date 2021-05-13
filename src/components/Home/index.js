import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './styles.scss';

const Home = ({ logged }) => {
  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home">Hommme</div>
  );
};

Home.propTypes = {
  logged: PropTypes.string,
};

Home.defaultProps = {
  logged: null,
};

export default Home;

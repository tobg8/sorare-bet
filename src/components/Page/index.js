import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const Page = ({ children, logged }) => {
  const history = useHistory();
  if (logged) {
    history.push('/home');
  }

  return (
    <main className="page">
      {children}
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default Page;

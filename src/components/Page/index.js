import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Page = ({ children }) => (
  <main className="page">
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

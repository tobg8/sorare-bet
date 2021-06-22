import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ErrorMessage = ({ content }) => {
  const ok = 'truc';

  return (
    <div className="error">
      <p className="error__content">{content}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ErrorMessage;

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputLogin = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const inputId = `field__${name}`;

  const handleChangeField = (event) => {
    onChange(event.target.value, name);
  };

  return (
    <div className={value.length > 0 ? 'input input--has-content' : 'input'}>
      <input
        value={value}
        id={inputId}
        type={type}
        placeholder={placeholder}
        className="input__field"
        onChange={handleChangeField}
      />
      <label
        htmlFor={inputId}
        className="input__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

InputLogin.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputLogin.defaultProps = {
  type: 'text',
  value: '',
};

export default InputLogin;

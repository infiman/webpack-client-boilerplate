import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => ( // eslint-disable-line
  <button
    onClick={onClick} // eslint-disable-line
  >
    {name}
  </button>
);

Button.defaultProps = {
  name: '',
};

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Button;

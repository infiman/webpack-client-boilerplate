import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button>
    <Link
      to={`/type/${name}`}
    >
      {name}
    </Link>
  </button>
);

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;

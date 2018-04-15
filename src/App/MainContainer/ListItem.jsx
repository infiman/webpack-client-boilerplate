import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ data }) => (
  <li>
    <Link
      to={`type/${data.name}`}
    >
      {data.name}
    </Link>
  </li>
);

ListItem.defaultProps = {
  data: '',
};

ListItem.propTypes = {
  data: PropTypes.object, // eslint-disable-line
};

export default ListItem;

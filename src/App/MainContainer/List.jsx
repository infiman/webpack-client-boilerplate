import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({ data }) => (
  <ul>
    {data.map(
      item => (
        <ListItem key={item.name} data={item} />
      ),
    )}
  </ul>
);

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: PropTypes.array, // eslint-disable-line
};

export default List;

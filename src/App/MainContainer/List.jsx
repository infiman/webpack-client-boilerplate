import React from 'react';
import PropTypes from 'prop-types';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Link } from 'react-router-dom';

const ListContainer = ({ data }) => (
  <div>
    {Object.keys(data).length > 0 &&
      <List>
        {Object.entries(data).map(arr => (
          <ListItem
            key={arr[0]}
            justify="between"
            separator="horizontal"
          >
            <Link
              to={`${arr[0]}`}
            >
              {arr[0]}
            </Link>
          </ListItem>
        ))
        }
      </List>
    }
  </div>
);

ListContainer.defaultProps = {
  data: {},
};

ListContainer.propTypes = {
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default ListContainer;

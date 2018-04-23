import React from 'react';
import PropTypes from 'prop-types';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Link } from 'react-router-dom';

const ListContainer = ({ data }) => (
  <div>
    {Object.keys(data).length > 0 &&
      <List>
        {Object.keys(data).map(key => (
          <ListItem
            key={key}
            justify="between"
            separator="horizontal"
          >
            <Link
              to={`${key}`}
            >
              {key}
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

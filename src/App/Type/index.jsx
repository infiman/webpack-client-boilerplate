import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Link } from 'react-router-dom';

import './index.scss';
import { searchData } from '../../reducers/search';

class Type extends React.Component {
  componentDidMount() {
    const type = this.props.match.url;
    this.props.searchData(type.slice(1));
  }

  render() {
    return (
      <div>
        <span>You are now at {location.pathname}</span>
        <List>
          {this.props.data.map(item => (
            <ListItem
              key={item.name}
              justify="between"
              separator="horizontal"
            >
              <Link
                to={`${this.props.match.url}/${item.name}`}
              >
                {item.name}
              </Link>
            </ListItem>
          ),
          )}
          <Link
            to={'/'}
          >
            Home
          </Link>
        </List>
      </div>
    );
  }
}

Type.defaultProps = {
  match: {},
  url: '',
  data: [],
};

Type.propTypes = {
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  url: PropTypes.string,
  data: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  searchData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  types: state.types.results,
  data: state.search.results,
});

export default connect(mapStateToProps, { searchData })(Type);

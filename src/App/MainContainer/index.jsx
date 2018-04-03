import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTypes } from '../../reducers/types';
import { searchData } from '../../reducers/search';

import './index.scss';

class Container extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <span className="typeField">{ JSON.stringify(this.props.types) }</span>
        <span className="searchField">{ JSON.stringify(this.props.search) }</span>
      </div>
    );
  }
}

Container.defaultProps = {
  types: [],
  search: '',
};

Container.propTypes = {
  types: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  search: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  types: state.types.results,
  search: state.search.results,
});

export default connect(mapStateToProps, { fetchTypes, searchData })(Container);

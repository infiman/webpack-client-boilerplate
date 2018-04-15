import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTypes } from '../../reducers/types';
import { searchData } from '../../reducers/search';
import List from '../MainContainer/List';

import './index.scss';

class Container extends React.Component {
  componentDidMount() {
    console.log(this.props.searchData('?'));
  }

  render() {
    return (
      <div className="mainContainer">
        <List key={this.props.types} data={this.props.types} />
      </div>
    );
  }
}

Container.defaultProps = {
  types: [],
};

Container.propTypes = {
  searchData: PropTypes.func.isRequired,
  types: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  types: state.types.results,
});

export default connect(mapStateToProps, { fetchTypes, searchData })(Container);

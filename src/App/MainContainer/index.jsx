import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchData } from '../../reducers/search';
import ListContainer from '../MainContainer/List';

import './index.scss';

class Container extends React.Component {
  componentDidMount() {
    this.props.searchData('?');
  }

  render() {
    return (
      <div className="mainContainer">
        <ListContainer key={this.props.search} data={this.props.search} />
      </div>
    );
  }
}

Container.defaultProps = {
  search: {},
};

Container.propTypes = {
  searchData: PropTypes.func.isRequired,
  search: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps, { searchData })(Container);

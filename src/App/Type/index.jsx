import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';
import { searchData } from '../../reducers/search';

class Type extends React.Component {
  componentDidMount() {
    const type = location.pathname;
    this.props.searchData(type.slice(1));
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <span>You are now at {location.pathname}</span>
        <div>Type name: {this.props.name}</div>
        <div>Generation name: {this.props.generationName}</div>
      </div>
    );
  }
}


Type.defaultProps = {
  name: '',
  generationName: '',
};

Type.propTypes = {
  name: PropTypes.string,
  generationName: PropTypes.string,

  searchData: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired, //eslint-disable-line
};

const mapStateToProps = state => ({
  types: state.types.results,
  name: state.search.name,
  generationName: state.search.generation.name,
});

export default connect(mapStateToProps, { searchData })(Type);

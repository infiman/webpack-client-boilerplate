import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GoTo extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.location.pathname}</span>
        <span>{JSON.stringify(this.props.search)}</span>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

GoTo.defaultProps = {
  pathname: '',
  location: {},
  search: [],
};

GoTo.propTypes = {
  search: PropTypes.array,  // eslint-disable-line
  location: PropTypes.object, // eslint-disable-line
  pathname: PropTypes.string,
};

const mapStateToProps = state => ({
  search: state.search.results,
});

export default connect(mapStateToProps, null)(GoTo);

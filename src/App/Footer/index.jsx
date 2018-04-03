import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTypes } from '../../reducers/types';
import './index.scss';

const getTypes = types => types.map(
  type => <button key={type.name}>{type.name}</button>,
);

class Footer extends React.Component {
  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    return (
      <div className="footer">
        {getTypes(this.props.types)}
      </div>
    );
  }
}

Footer.propTypes = {
  types: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  fetchTypes: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  types: [],
};

const mapStateToProps = state => ({
  types: state.types.results,
});

export default connect(mapStateToProps, { fetchTypes })(Footer);

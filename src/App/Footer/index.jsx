import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import { fetchTypes } from '../../reducers/types';

import './index.scss';

class Footer extends React.Component {
  static getTypes(types) {
    return types.map(
      type => (
        <Button
          key={type.name}
          name={type.name}
        />),
    );
  }
  // WHTF is static ?!

  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    return (
      <div className="footer">
        {Footer.getTypes(this.props.types)}
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

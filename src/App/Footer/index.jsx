import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './button';
import { fetchTypes } from '../../reducers/types';
import { searchData } from '../../reducers/search';

import './index.scss';

class Footer extends React.Component {
  constructor(...args) {
    super(...args);

    this.getTypes = this.getTypes.bind(this);
    // this.onClick = this.onClick.bind(this);
    // abishek
  }

  componentDidMount() {
    this.props.fetchTypes();
  }

  getTypes(types) {
    return types.map(
      type => (
        <Button
          key={type.name}
          name={type.name}
          onClick={() => this.props.searchData(`type/${type.name}`)}
        />),
    );
  }

  render() {
    return (
      <div className="footer">
        {this.getTypes(this.props.types)}
      </div>
    );
  }
}

Footer.propTypes = {
  types: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  fetchTypes: PropTypes.func.isRequired,
  searchData: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  types: [],
};

const mapStateToProps = state => ({
  types: state.types.results,
});

export default connect(mapStateToProps, { searchData, fetchTypes })(Footer, Button);

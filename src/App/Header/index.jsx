import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { searchData } from '../../reducers/search';

import './index.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line
    this.props.searchData(this.state.value); 
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="header" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, { searchData })(Header);

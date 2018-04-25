import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Spinning from 'grommet/components/icons/Spinning';
import { Link } from 'react-router-dom';

import './index.scss';
import { cacheEntity } from '../../reducers/entity';

class Entity extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.cacheEntity(this.props.match.url);
  }

  render() {
    return (
      <div>
        {this.props.entity && this.props.entity.forms ?
          (<List>
            {this.props.entity.forms.map(item => (
              <ListItem
                key={item.name}
              >
                {item.name}
              </ListItem>
            ),
            )}
          </List>) : (<Spinning size="huge" />)
        }
        <div>
          {JSON.stringify(this.props.entity)}
        </div>
        <div>
          <Link
            to={'/'}
          >
          Home
          </Link>
        </div>
      </div>
    );
  }
}

Entity.defaultProps = {
  match: {},
  entity: {},
};

Entity.propTypes = {
  cacheEntity: PropTypes.func.isRequired,
  match: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  entity: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, props) => ({
  entity: state.entity[props.match.url],
});

export default connect(mapStateToProps, { cacheEntity })(Entity);


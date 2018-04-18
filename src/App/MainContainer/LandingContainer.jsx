import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import Header from '../Header/index';
import Container from './index';
import Footer from '../Footer/index';
import store from '../../reducers/index';
import GoTo from '../GoTo/index';
import Type from '../Type/index';

class LandingContainer extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <section className="app">
            <span className="app-text">
              I can reload React code! Yey!
              <Header />
              <Switch>
                <Route exact path="/" component={Container} />
                <Route path="/search/:type" component={GoTo} />
                <Route path="/:type" component={Type} />
                <Redirect from="*" to="/" />
              </Switch>
              <Footer />
            </span>
          </section>
        </Provider>
      </Router>
    );
  }
}

export default LandingContainer;

import React from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import Header from './Header';
import Container from './MainContainer';
import Footer from './Footer';
import store from '../reducers';

console.log(store.getState());

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <section className="app">
          <span className="app-text">
            I can reload React code! Yey!
            <Header />
            <Container />
            <Footer />
          </span>
        </section>
      </Provider>
    );
  }
}

export default App;

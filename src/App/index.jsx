import React from 'react';

import './index.scss';
import Footer from './footer';

class App extends React.PureComponent {
  render() {
    return (
      <section className="app">
        <span className="app-text">
          I can reload React code! Yey!
          <Footer />
        </span>
      </section>
    );
  }
}

export default App;

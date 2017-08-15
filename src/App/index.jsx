import React from 'react';

import './index.scss';

class App extends React.PureComponent {
  render() {
    return (
      <section className="app">
        <span className="app-text">
          I can reload React code! Yey!
        </span>
      </section>
    );
  }
}

export default App;

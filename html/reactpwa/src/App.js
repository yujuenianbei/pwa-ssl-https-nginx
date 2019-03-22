import React, { Component } from 'react';
import './App.less';
import Bottom from './layout/Bottom/index';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div>
        <Bottom />
        <Main />
    </div>
    );
  }
}

export default App;

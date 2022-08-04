import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import appStyles from './App.module.css';

class App extends React.Component {
  render() {
    return <div className={appStyles.app}>
      <AppHeader />
    </div>
  }
}

export default App;

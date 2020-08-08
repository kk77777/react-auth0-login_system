import React, { Fragment } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <LoginButton />
      <LogoutButton />
    </Fragment>
  );
};

export default App;

import React, { Fragment } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Fragment>
  );
};

export default App;

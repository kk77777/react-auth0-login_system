import React, { Fragment } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Fragment>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Fragment>
  );
};

export default App;

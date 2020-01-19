import React, { Fragment } from 'react';
import Routes from '../router'
import AppProvider from './provider'



function App() {
  return (
    <AppProvider>

      <Routes />

    </AppProvider>
  );
}

export default App;

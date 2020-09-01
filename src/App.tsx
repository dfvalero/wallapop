import React from 'react';
import { AppProvider } from './context';
import { GlobalStyles } from './components/GlobalStyles';
import Home from './views/home';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
};

export default App;

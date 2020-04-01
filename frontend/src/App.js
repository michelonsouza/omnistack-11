import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import history from './services/history';

import { SwitchButton } from './components';

import Routes from './routes';

function App() {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeName = localStorage.getItem('@bethehero:theme');
    if (themeName) {
      setTheme(themeName === 'light' ? light : dark);
    }
  }, []);

  function toogleTheme() {
    localStorage.setItem(
      '@bethehero:theme',
      theme.name === 'light' ? 'dark' : 'light'
    );
    setTheme(theme.name === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <SwitchButton
        value={theme.name}
        checkedValue="dark"
        onSwitch={toogleTheme}
      />
      <Router history={history}>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

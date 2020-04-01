import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native-appearance';

import light from './src/styles/themes/light';
import dark from '~/styles/themes/dark';
import Routes from './src/routes';

export default function App() {
  const colorScheme = useColorScheme();

  const theme = useMemo(() => {
    return colorScheme === 'dark' ? dark : light;
  }, [colorScheme]);

  console.log(colorScheme);

  const barStyle = useMemo(() => {
    return colorScheme === 'light' ? 'dark-content' : 'light-content';
  }, [colorScheme]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" barStyle={barStyle} />
      <Routes />
    </ThemeProvider>
  );
}

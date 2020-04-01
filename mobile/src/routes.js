import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Incidents, Detail } from './screens';

const { Navigator: StackNavigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator
        initialRouteName="Incidents"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Incidents" component={Incidents} />
        <Screen name="Detail" component={Detail} />
      </StackNavigator>
    </NavigationContainer>
  );
}

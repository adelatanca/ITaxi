import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name={'Călătorește'} component={HomeScreen} />
        <Stack.Screen name={'Istoric comenzi'} component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;

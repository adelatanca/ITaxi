import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

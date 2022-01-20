import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import 'react-native-gesture-handler';
import Router from './src/navigation/Root';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  useEffect(() => {
    const updateUserCar = async () => {
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!authenticatedUser) {
        return;
      }

      const carData = await API.graphql(
        graphqlOperation(getCarId, {id: authenticatedUser.attributes.sub}),
      );

      console.log(carData);

      if (!!carData.data.getCar) {
        console.log('User already has a car assigned');
        return;
      }

      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'ITaxiX',
        userId: authenticatedUser.attributes.sub,
        carNumber: 'BH-09-ADL',
      };

      await API.graphql(graphqlOperation(createCar, {input: newCar}));
    };

    updateUserCar();
  }, []);

  return <Router />;
};

export default withAuthenticator(App);

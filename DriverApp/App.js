import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';

Amplify.configure(config);

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
      };

      await API.graphql(graphqlOperation(createCar, {input: newCar}));
    };

    updateUserCar();
  }, []);

  //Auth.signOut();

  return (
    <SafeAreaView>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);

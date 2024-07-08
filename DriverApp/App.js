import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';
import 'react-native-gesture-handler';
import Router from './src/navigation/Root';
import { LogBox } from 'react-native';
import { I18n } from 'aws-amplify';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);



Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
Auth.configure(config);

const dict = {
  'ro': {
    'Username': "Username",
    'Password': "Parola",
    "Forgot Password": 'Ai uitat parola',
    "Sign in to your account": "Conectați-vă la contul dumneavoastră",
    "Please Sign In / Sign Up": "Sign In / Sign Up",
    "Enter your username": "Username",
    "Enter your password": "Parola",
    "Confirm Sign Up": "Confirmă Sign Up-ul",
    "Confirmation Code": "Codul de confirmare",
    "Confirm": "Confirmă",
    "Enter your confirmation code": "Codul de confirmare",
    "Resend code": "Retrimite codul",
    "Back to Sign In": "Înapoi la Sign In",
    "Create a new account": "Creează un cont nou",
    "Phone Number": "Telefon",
    "Confirm a Code": "Codul de confirmare",
    "Username cannot be empty": "Completați username",
    "User does not exist": "Nu există acest username",
    "Custom auth lambda trigger is not configured for the user pool. ": "Eroare",
    "Reset your password": "Resetează parola",
    "Send": "Trimite",
    "User cannot be confirmed. Current status is CONFIRMED": "User deja confirmat",
    "Invalid verification code provided, please try again.": "Cod de confirmare invalid, încearcă din nou.",
    "Username/client id combination not found.": "Nu s-a gasit username-ul"
  }
};

I18n.putVocabularies(dict);
I18n.setLanguage('ro');


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
        graphqlOperation(getCarId, { id: authenticatedUser.attributes.sub }),
      );

      if (!!carData.data.getCar) {
        return;
      }

      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'ITaxiX',
        userId: authenticatedUser.attributes.sub,
        carNumber: 'BH-09-ADL',
      };

      await API.graphql(graphqlOperation(createCar, { input: newCar }));
    };

    updateUserCar();
  }, []);

  return <Router />;
};

export default withAuthenticator(App);

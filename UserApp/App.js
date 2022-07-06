
import React from "react";
import RootNavigator from "./src/navigation/Root";
import "react-native-gesture-handler";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import config from "./aws-exports";

import { I18n } from 'aws-amplify';
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
    "Invalid verification code provided, please try again": "Cod de confirmare invalid, încearcă din nou."
  }
};

I18n.putVocabularies(dict);
I18n.setLanguage('ro');

const App = () => {

  return (
    <RootNavigator />
  );
};

export default withAuthenticator(App);

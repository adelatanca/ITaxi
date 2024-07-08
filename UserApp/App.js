<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigation/Root";
import SearchResults from "./src/screens/SearchResults";
import HomeScreen from "./src/screens/HomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

=======

import React from "react";
import RootNavigator from "./src/navigation/Root";
import "react-native-gesture-handler";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import config from "./aws-exports";
<<<<<<< HEAD
=======

import { I18n } from 'aws-amplify';
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
Auth.configure(config);

<<<<<<< HEAD
// import Geolocation from "@react-native-community/geolocation";
// import { PermissionsAndroid, Platform } from "react-native";
// import { AsyncStorage } from "react-native";
import * as Location from "expo-location";

// navigator.geolocation = require("@react-native-community/geolocation");

const App = () => {
  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "ITaxi App Location Permission",
  //         message:
  //           "ITaxi App needs access to your location " +
  //           "so you can take awesome rides.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK",
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  // useEffect(() => {
  //   if (Platform.OS === "android") {
  //     androidPermission();
  //   } else {
  //     Geolocation.requestForegroundPermissionsAsync();
  //   }
  // }, []);

  // const signOut = () => {
  //   Auth.signOut()
  //     .then(() => {
  //       console.log("signed out");
  //       props.onStateChange("signedOut", null);
  //       console.log("sign out");
  //     })
  //     .catch((err) => {
  //       console.log("err: ", err);
  //     });
  // };

  return (
    <RootNavigator />
    // <Text onPress={signOut} style={{ marginTop: 50 }}>
    //   Sign Out
    // </Text>
=======
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
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
  );
};

export default withAuthenticator(App);

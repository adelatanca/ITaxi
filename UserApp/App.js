import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./src/navigation/Root";
import SearchResults from "./src/screens/SearchResults";
import HomeScreen from "./src/screens/HomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { withAuthenticator, Authenticator } from "aws-amplify-react-native";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import config from "./aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
Auth.configure(config);

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
    // <RootNavigator />

    <RootNavigator />
  );
};

export default App;

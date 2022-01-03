import React from "react";
import { Authenticator } from "aws-amplify-react-native"; // or 'aws-amplify-react-native'
import App from "./App";
import { Text, View, Button, StyleSheet } from "react-native";

import RootNavigator from "../UserApp/src/navigation/Root";

import Home from "../UserApp/src/screens/HomeScreen";

import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import config from "./aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const Adela = (props) => {
  return (
    <View>
      <Button title="Sign Out" onPress={() => Auth.signOut()} />
    </View>
  );
};
const AuthScreens = (props) => {
  console.log("props", props.authState);
  switch (props.authState) {
    case "signedIn":
      return <Adela />;
    default:
      return <></>;
  }
};
const AppWithAuth = () => {
  return (
    <View style={styles.container}>
      <Authenticator>
        {/* <App /> */}
        <AuthScreens />
        <Text
          onPress={() => console.log("google")}
          style={{ marginVertical: 10 }}
        >
          Google sign in
        </Text>
      </Authenticator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppWithAuth;

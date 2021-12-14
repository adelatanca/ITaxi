import React from "react";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false,
          }
        }
        //  initialRouteName={"DestinationSearch"}
      >
        <Stack.Screen
          name={"Homeeee"}
          component={HomeScreen}
          //  options={{ title: "Home Screen" }}
        />
        {/* <Stack.Screen
          name={"DestinationSearch"}
          component={DestinationSearch}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen name={"SearchResults"} component={SearchResults} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

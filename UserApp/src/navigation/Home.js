import React from "react";
import styles from "./styles";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import SearchOnMapScreen from '../screens/SearchOnMapScreen';
import PaymentScreen from "../screens/PaymentScreen";
import OrderScreen from "../screens/OrderScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"HomeScreen"}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen
        name={"DestinationSearch"}
        component={DestinationSearch}
        options={{ title: "Home Screen" }}
      />
      <Stack.Screen name={"SearchOnMapScreen"} component={SearchOnMapScreen} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
      <Stack.Screen name={"PaymentScreen"} component={PaymentScreen} />
      <Stack.Screen name={"OrderPage"} component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
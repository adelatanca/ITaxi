import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignItems: "center",
    }}
  >
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your trips">
          {() => <DummyScreen name={"Your trips"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name={"Help"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name={"Wallet"} />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name={"Settings"} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

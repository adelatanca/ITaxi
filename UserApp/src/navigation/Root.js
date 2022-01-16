import React, { useState } from "react";
import { View, Text, Pressable, Appearance } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./Home";
import HistoryScreen from "../screens/HistoryScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import RatingScreen from "../screens/RatingScreen";
import CustomDrawer from "./CustomDrawer";
import AntDesign from "react-native-vector-icons/AntDesign";

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
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Calatoreste"
          component={HomeNavigator}
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"car"} size={20} color={"gray"} />
            ),
          }}
        />

        <Drawer.Screen
          name="Istoric curse"
          component={HistoryScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"clockcircleo"} size={20} color={"gray"} />
            ),
          }}
        ></Drawer.Screen>

        <Drawer.Screen
          name="Promotii"
          component={AboutUsScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"tago"} size={20} color={"gray"} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Rating"
          component={RatingScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"staro"} size={20} color={"gray"} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Asistenta"
          component={AboutUsScreen}
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"phone"} size={20} color={"gray"} />
            ),
          }}
        ></Drawer.Screen>
        <Drawer.Screen
          name="Despre noi"
          options={{
            drawerIcon: (config) => (
              <AntDesign name={"infocirlceo"} size={20} color={"gray"} />
            ),
          }}
        >
          {() => <DummyScreen name="Despre noi" component={AboutUsScreen} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

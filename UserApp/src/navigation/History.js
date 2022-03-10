import React from "react";
import styles from "./styles";
import HistorySpecificScreen from "../screens/HistorySpecificScreen";
import HistoryScreen from '../screens/HistoryScreen'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HistoryNavigator = (props) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={"HistoryScreen"}
        >
            <Stack.Screen name={"Istoric"} component={HistoryScreen} />
            <Stack.Screen name={"Istoric specific"} component={HistorySpecificScreen} />
        </Stack.Navigator>
    );
};

export default HistoryNavigator;

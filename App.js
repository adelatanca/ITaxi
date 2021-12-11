import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import SearchResults from "./src/screens/SearchResults";

export default function App() {
  return (
    <View>
      {/* <HomeScreen /> */}
      <SearchResults />
      <StatusBar style="auto" />
    </View>
  );
}

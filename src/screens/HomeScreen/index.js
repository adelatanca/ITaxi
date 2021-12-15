import React from "react";
import { View, Text, Dimensions } from "react-native";
import styles from "./styles";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import CovidMessage from "../../components/CovidMessage";
import ITaxiTypes from "../../components/ITaxiTypes";

const HomeScreen = (props) => {
  return (
    <View>
      {/* <View style={{ height: Dimensions.get("window").height - 400 }}>
        <HomeMap />
      </View>
      <CovidMessage /> */}
      <HomeSearch />
      <ITaxiTypes />
    </View>
  );
};

export default HomeScreen;

import React from "react";
import { View, Text, Dimensions } from "react-native";
// import styles from "./styles";
import ITaxiTypes from "../../components/ITaxiTypes";
import RouteMap from "../../components/RouteMap";

//import { useRoute } from "@react-navigation/native";

const SearchResult = (props) => {
  //const route = useRoute();

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <RouteMap />
      </View>
      <View style={{ height: 400 }}>
        <ITaxiTypes />
      </View>
    </View>
  );
};

export default SearchResult;

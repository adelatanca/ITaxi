import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {(() => {
          if (data.description == "Acasa") {
            return <Entypo name="home" size={20} color={"white"} />;
          } else if (data.description == "Job")
            return <Entypo name="laptop" size={20} color={"white"} />;
          else return <Entypo name="location" size={20} color={"white"} />;
        })()}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}{" "}
      </Text>
    </View>
  );
};

export default PlaceRow;

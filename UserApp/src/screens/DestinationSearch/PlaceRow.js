import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";
const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {(() => {
          if (data.description == "Acasa") {
            return (
              <View
                style={[styles.iconContainer, { backgroundColor: "#218cff" }]}
              >
                <Entypo name="home" size={25} color={"white"} />
              </View>
            );
          } else if (data.description == "Job")
            return (
              <View style={[styles.iconContainer]}>
                <AntDesign name="laptop" size={25} color={"white"} />
              </View>
            );
          else
            return (
              <View
                style={[styles.iconContainer, { backgroundColor: "white" }]}
              >
                <Entypo name="location-pin" size={25} color={"#45a8f29e"} />
              </View>
            );
        })()}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;

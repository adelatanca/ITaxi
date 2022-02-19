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
                style={[styles.iconContainer]}
              >
                <Entypo style={styles.icon} name="home" size={25} color={"white"} />
              </View>
            );
          } else if (data.description == "Job")
            return (
              <View style={[styles.iconContainer]}>
                <AntDesign style={styles.icon} name="laptop" size={25} color={"white"} />
              </View>
            );
          else
            return (
              <View
                style={[styles.iconContainer]}
              >
                <Entypo style={styles.icon} name="location-pin" size={25} color={"white"} />
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

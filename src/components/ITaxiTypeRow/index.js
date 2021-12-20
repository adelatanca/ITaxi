import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

const ITaxiTypeRow = (props) => {
  const { type, onPress, isSelected } = props;
  const getImage = () => {
    if (type.type === "ITaxiX") {
      return require(`../../assets/images/UberX.png`);
    }
    if (type.type === "Comfort") {
      return require(`../../assets/images/Mercedes.png`);
    }
    if (type.type === "ITaxiXL") {
      return require(`../../assets/images/UberXL.png`);
    }
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#efefef" : "white" },
      ]}
    >
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={"person"} size={16} />3
        </Text>

        <Text style={styles.time}>9:03PM drop off </Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={18} color={"#47d742"} />
        <Text style={styles.price}>est. ${type.price} </Text>
      </View>
    </Pressable>
  );
};

export default ITaxiTypeRow;

import React, { useEffect } from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

const ITaxiTypeRow = (props) => {
  const { type, onPress, isSelected, hours, minutes, km } = props;
  const getImage = () => {
    if (type.type === "ITaxiX") {
      return require(`../../assets/images/UberX.png`);
    }
    if (type.type === "Confort") {
      return require(`../../assets/images/Mercedes.png`);
    }
    if (type.type === "ITaxiXL") {
      return require(`../../assets/images/UberXL.png`);
    }
  };

  // var hours = new Date().getHours();
  // var min = new Date().getMinutes();

  if (props.km == null) {
    console.log("props null");
  } else {
    var hoursProps = props?.hours;
    var minutesProps = props?.minutes;
    var kmProps = props?.km.toString().substr(0, 4);
    var price = (props?.km * 3.49).toString().substr(0, 5);

    if (type.type == "Confort") {
      price = (props?.km * 4.59).toString().substr(0, 5);
    }
    if (type.type == "ITaxiXL") {
      price = (props?.km * 2.79).toString().substr(0, 5);
    }
  }

  const renderMiddle = () => {
    if (hoursProps == 0) {
      console.log(" tipul hoursProps", typeof hoursProps);
      return (
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type} <Ionicons name={"person"} size={16} color={"#45a8f2"} />
            {type.nrPers}
          </Text>

          <Text style={styles.time}>
            La destinație în {minutesProps} minute.
          </Text>
          <Text style={styles.time}>Distanța {kmProps} km </Text>
        </View>
      );
    }

    if (hoursProps == 1) {
      return (
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type} <Ionicons name={"person"} size={16} color={"#45a8f2"} />
            {type.nrPers}
          </Text>

          <Text style={styles.time}>
            La destinație într-o ora și {minutesProps} minute.
          </Text>
          <Text style={styles.time}>Distanța {kmProps} km </Text>
        </View>
      );
    }

    if (hoursProps > 1) {
      return (
        <View style={styles.middleContainer}>
          <Text style={styles.type}>
            {type.type} <Ionicons name={"person"} size={16} color={"#45a8f2"} />
            {type.nrPers}
          </Text>

          <Text style={styles.time}>
            La destinație în {hoursProps} ore și {minutesProps} minute.
          </Text>
          <Text style={styles.time}>Distanța {kmProps} km </Text>
        </View>
      );
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
      {renderMiddle()}

      <View style={styles.rightContainer}>
        <Ionicons name={"cash"} size={18} color={"#47d742"} />
        <Text style={styles.price}> {price} LEI </Text>
      </View>
    </Pressable>
  );
};

export default ITaxiTypeRow;

import React, { useState } from "react";
import { Image, Appearance, useColorScheme, Text, View } from "react-native";
import styles from "./styles.js";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const AboutUsScreen = (props) => {
  let colorScheme = useColorScheme();

  const Row = (props) => (
    <View style={styles.rowView}>
      <Entypo
        name={props.entypo}
        size={22}
        color={"#45a8f2"}
        style={styles.icon}
      />
      <Text style={{ fontSize: 20 }}>{props.name}</Text>
      <MaterialIcons
        name={"navigate-next"}
        size={25}
        color={"#45a8f2"}
        style={styles.navigateNext}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Informații </Text>

      <Row name="Evaluează aplicația" entypo="star"></Row>

      <Row name="Dă-ne un Like pe Facebook" entypo="thumbs-up"></Row>

      <Row name="Cariere la ITaxi" entypo="mail"></Row>

      <Row name="Juridice" entypo="layers"></Row>

      <Text style={styles.bottomText}>
        ITaxi <Entypo name={"heart"} size={15} color={"red"} /> România
      </Text>
    </View>
  );
};

export default AboutUsScreen;

import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calatoreste doar daca este necesar! </Text>
      <Text style={styles.text}>
        This method has the advantage of fonts being copied from this module at
        build time so that the fonts and JS are always in sync, making upgrades
        painless.{" "}
      </Text>
      <Text style={styles.learnMore}>Ai grija de sanatatea ta! </Text>
    </View>
  );
};

export default CovidMessage;

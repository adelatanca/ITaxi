import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calatoreste doar daca este necesar! </Text>
      <Text style={styles.text}>
        Cu noi poti sa calatoresti in siguranta :){" "}
      </Text>
      <Text style={styles.learnMore}>Ai grija de sanatatea ta! </Text>
    </View>
  );
};

export default CovidMessage;

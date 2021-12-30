import React from "react";
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles.js";

const HomeSearch = (props) => {
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };

  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <View style={styles.iconContainer}>
          <AntDesign name={"search1"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.inputText}>Incotro?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={"location-pin"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Loc anterioara 1</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={"location-pin"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Loc anterioara 2</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

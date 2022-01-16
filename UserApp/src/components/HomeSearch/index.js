import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles.js";

const HomeSearch = (props) => {
  const [prevLocation, setPrevLocation] = useState(null);
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };

  const getValue = () => {
    AsyncStorage.getItem("destination").then((value) => {
      setPrevLocation(value);
    });
  };

  useEffect(() => {
    getValue();
  });

  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <View style={styles.iconContainer}>
          <AntDesign name={"search1"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.inputText}>Incotro?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"purple"} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Entypo name={"location-pin"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>{prevLocation}</Text>
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

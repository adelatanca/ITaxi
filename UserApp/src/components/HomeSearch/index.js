<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
import { View, Text, Pressable } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
=======
import AsyncStorage from "@react-native-async-storage/async-storage";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee

import styles from "./styles.js";

const HomeSearch = (props) => {
<<<<<<< HEAD
  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };

  return (
    <View>
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#535353"} />
          <Text>Now</Text>
=======
  const [prevLocation, setPrevLocation] = useState(null);
  const navigation = useNavigation();

  const goToSearch = () => {
    const region = "";
    const destinatie = "";
    navigation.navigate("DestinationSearch", {
      region,
      destinatie
    });
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
        <Text style={styles.inputText}>Încotro?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"gray"} />
          <Text>Acum</Text>
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </Pressable>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
<<<<<<< HEAD
          <AntDesign name={"clockcircle"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={"home"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
=======
          <Entypo name={"location-pin"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>{prevLocation}</Text>
      </View>
      {/* <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <Entypo name={"location-pin"} size={20} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Loc anterioara 2</Text>
      </View> */}
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
    </View>
  );
};

export default HomeSearch;

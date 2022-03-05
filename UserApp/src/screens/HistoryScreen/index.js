import React, { useState } from "react";
import { Image, Appearance, useColorScheme, Text, View } from "react-native";
import styles from './styles';

const HistoryScreen = (props) => {
  let colorScheme = useColorScheme();

  return (
    <View>
      <Text> This is your history </Text>
    </View>
  );
};

export default HistoryScreen;

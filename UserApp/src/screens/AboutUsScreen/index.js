import React, { useState } from "react";
import { Image, Appearance, useColorScheme, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const AboutUsScreen = (props) => {
  let colorScheme = useColorScheme();

  return (
    <View>
      <Text> This is your history </Text>
    </View>
  );
};

export default AboutUsScreen;

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      {/* <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            console.log(data, details);
          }}
          styles={{ textInput: styles.textInput }}
          fetchDetails
          query={{
            key: "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk",
            language: "en",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          styles={{ textInput: styles.textInput }}
          fetchDetails
          query={{
            key: "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk",
            language: "en",
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

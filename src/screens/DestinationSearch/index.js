import React, { useState, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import PlaceRow from "./PlaceRow.js";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const homePlace = {
  description: "Acasa",
  geometry: { location: { latitude: 47.093271, longitude: 21.9024223 } },
};
const workPlace = {
  description: "Job",
  geometry: { location: { latitude: 47.0606603, longitude: 21.9188051 } },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    console.warn("checkNavigation is called");
    if (originPlace && destinationPlace) {
      console.warn("here");
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
      });
    }
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  Location.installWebGeolocationPolyfill();
  navigator.geolocation.getCurrentPosition();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            console.log(data, details);
          }}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Locatia curenta"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          enablePoweredByContainer={false}
          fetchDetails
          query={{
            key: "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vecinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          enablePoweredByContainer={false}
          fetchDetails
          query={{
            key: "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        <View style={styles.circle} />
        <View style={styles.line} />
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

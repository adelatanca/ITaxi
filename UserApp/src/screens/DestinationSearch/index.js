import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import PlaceRow from "./PlaceRow.js";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from "react-native-maps";

const homePlace = {
  description: "Acasa",
  geometry: { location: { lat: 47.093271, lng: 21.9024223 } },
};
const workPlace = {
  description: "Job",
  geometry: { location: { lat: 47.0606603, lng: 21.9188051 } },
};

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const [regionMap, setRegionMap] = useState({
    latitude: 47.093271,
    longitude: 21.9024223,
    latitudeDelta,
    longitudeDelta,
  });

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
      });
    }
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  Location.installWebGeolocationPolyfill();
  navigator.geolocation.getCurrentPosition();

  const renderError = () => {
    if (!destinationPlace?.data.geometry.location.lat) {
      return (
        <View>
          <Text
            style={{
              bottom: 600,
              width: "100%",
              left: 130,
            }}
          >
            Adresa nu a fost gasita
          </Text>
          <Image
            style={{
              bottom: 600,
              left: 140,
            }}
            source={require("../../assets/images/notFound.png")}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.close}>
          <Pressable onPress={() => goToHome()}>
            <AntDesign name={"close"} size={25} />
          </Pressable>
        </View>
        <Text style={styles.setDestination}>Seteaza destinatia </Text>
        <GooglePlacesAutocomplete
          placeholder="Cauta punctul de preluare"
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            //  console.log(data, details);
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
          textInputProps={{ placeholderTextColor: "black" }}
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
          placeholder="Cauta destinatia"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            // console.log(data, details);
          }}
          suppressDefaultStyles
          textInputProps={{ placeholderTextColor: "black" }}
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
        <View style={styles.pin}>
          <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
        </View>
      </View>
      {renderError()}
    </SafeAreaView>
  );
};

export default DestinationSearch;

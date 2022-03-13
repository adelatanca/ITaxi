import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import PlaceRow from "./PlaceRow.js";
import * as Location from "expo-location";
import { useRoute, useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const homePlace = {
  description: "Acasă",
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
  const [stopPlace, setStopPlace] = useState(null);

  const [addStopStation, setAddStopStation] = useState(false);

  const [regionMap, setRegionMap] = useState({
    latitude: 47.093271,
    longitude: 21.9024223,
    latitudeDelta,
    longitudeDelta,
  });

  const ref = useRef();
  const route = useRoute();
  const { region, destinatie } = route.params;

  useEffect(() => {
    ref?.current?.setAddressText(destinatie);
    setDestinationPlace(region);
    const interval = setInterval(() => {
      ref?.current?.setAddressText(destinatie);
      setDestinationPlace(region);
    }, 99999999999999999999999999999)
    return () => clearInterval(interval)
  });

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace && !addStopStation) {
      setStopPlace(false);
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
        stopPlace,
        destinatie
      });
    } else if (originPlace && destinationPlace && stopPlace) {
      navigation.navigate("SearchResults", {
        originPlace,
        destinationPlace,
        stopPlace,
        destinatie
      });
    }
  };

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const goToSearchOnMap = () => {
    navigation.navigate("SearchOnMapScreen");
  };

  const addStop = () => {
    setAddStopStation(true);
  };

  const deleteStop = () => {
    setAddStopStation(false);
  };

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace, stopPlace]);


  Location.installWebGeolocationPolyfill();
  navigator.geolocation.getCurrentPosition();
  // console.log(originPlace.data.description)

  const renderError = () => {
    // if (!destinationPlace?.data.geometry.location.lat) {
    //   return (
    //     <View>
    //       <Text
    //         style={{
    //           bottom: 600,
    //           width: "100%",
    //           left: 130,
    //         }}
    //       >
    //         Adresa nu a fost gasita
    //       </Text>
    //       <Image
    //         style={{
    //           bottom: 600,
    //           left: 140,
    //         }}
    //         source={require("../../assets/images/notFound.png")}
    //       />
    //     </View>
    //   );
    // }
  };

  if (addStopStation) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.close}>
            <Pressable onPress={() => goToHome()}>
              <AntDesign name={"close"} size={25} />
            </Pressable>
          </View>
          <Text style={styles.setDestination}>Setează destinația </Text>
          <GooglePlacesAutocomplete
            placeholder="Caută punctul de preluare"
            onPress={(data, details = null) => {
              setOriginPlace({ data, details });
              //  console.log(data, details);
            }}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel="Locația curentă"
            styles={{
              textInput: styles.textInput,
              container: styles.autocompleteContainer,
              listView: styles.listViewStopOrigin,
              separator: styles.separator,
            }}
            textInputProps={{ placeholderTextColor: "black" }}
            enablePoweredByContainer={false}
            fetchDetails
            query={{
              key: "AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw",
              language: "en",
            }}
            renderRow={(data) => <PlaceRow data={data} />}
            renderDescription={(data) => data.description || data.vecinity}
            predefinedPlaces={[homePlace, workPlace]}
          />

          <GooglePlacesAutocomplete
            placeholder="Caută destinația"
            ref={ref}
            onPress={(data, details = null) => {
              setDestinationPlace({ data, details });
              // console.log(data, details);
            }}
            suppressDefaultStyles
            textInputProps={{ placeholderTextColor: "black" }}
            styles={{
              listView: styles.listViewStop,
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
              key: "AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw",
              language: "en",
            }}
            renderRow={(data) => <PlaceRow data={data} />}
          />
          <View style={styles.circle} />
          <View style={styles.circleStop} />
          <View style={styles.lineStop} />
          <View style={styles.pinStop}>
            <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
          </View>
          <GooglePlacesAutocomplete
            placeholder="Adaugă oprire"
            onPress={(data, details = null) => {
              setStopPlace({ data, details });
              // console.log(data, details);
            }}
            suppressDefaultStyles
            textInputProps={{ placeholderTextColor: "black" }}
            styles={{
              textInput: styles.textInput,
              container: {
                ...styles.autocompleteContainer,
                top: 110,
              },
              separator: styles.separator,
            }}
            enablePoweredByContainer={false}
            fetchDetails
            query={{
              key: "AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw",
              language: "en",
            }}
            renderRow={(data) => <PlaceRow data={data} />}
          />
          <Pressable style={styles.deleteStop} onPress={() => deleteStop()}>
            <AntDesign name={"minus"} size={25} />
          </Pressable>

          <View style={styles.searchOnMapView}>
            <Pressable onPress={() => goToSearchOnMap()}>
              <Entypo style={styles.searchOnMapPin} name={'location-pin'} size={35} color={'#4d8beb'} />
              <Text style={styles.searchOnMap}>Caută pe hartă </Text>
            </Pressable>
          </View>
        </View>
        {renderError()}
      </SafeAreaView>
    );

  } else {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.close}>
            <Pressable onPress={() => goToHome()}>
              <AntDesign name={"close"} size={25} />
            </Pressable>
          </View>
          <Text style={styles.setDestination}>Setează destinația </Text>
          <GooglePlacesAutocomplete
            placeholder="Caută punctul de preluare"
            onPress={(data, details = null) => {
              setOriginPlace({ data, details });
              //  console.log(data, details);
            }}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel="Locația curentă"
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
              key: "AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw",
              language: "en",
            }}
            renderRow={(data) => <PlaceRow data={data} />}
            renderDescription={(data) => data.description || data.vecinity}
            predefinedPlaces={[homePlace, workPlace]}
          />

          <GooglePlacesAutocomplete
            placeholder="Caută destinația"
            ref={ref}
            onPress={(data, details = null) => {
              setDestinationPlace({ data, details });
              //  console.log("FROMTHERE " + data, details);
            }}
            suppressDefaultStyles
            textInputProps={{ placeholderTextColor: "black" }
            }
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
              key: "AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw",
              language: "en",
            }}
            renderRow={(data) => <PlaceRow data={data} />}
          />
          <View style={styles.circle} />
          <View style={styles.line} />
          <View style={styles.pin}>
            <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
          </View>

          <View style={styles.addStop}>
            <Pressable onPress={() => addStop()}>
              <AntDesign name={"plus"} size={25} />
            </Pressable>
          </View>

          <View style={styles.searchOnMapView}>
            <Pressable onPress={() => goToSearchOnMap()}>
              <Entypo style={styles.searchOnMapPin} name={'location-pin'} size={35} color={'#4d8beb'} />
              <Text style={styles.searchOnMap}>Caută pe hartă </Text>
            </Pressable>
          </View>

        </View>
        {renderError()}
      </SafeAreaView>
    );
  }
};

export default DestinationSearch;

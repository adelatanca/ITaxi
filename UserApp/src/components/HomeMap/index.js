<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import styles from "./styles";
// import cars from "../../assets/data/cars";

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
=======
import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  Appearance,
  useColorScheme,
  View,
  Text,
  Pressable,
} from "react-native";
import styles from "./styles";
// import cars from "../../assets/data/cars";
import { Entypo } from "@expo/vector-icons";
import mapDarkStyle from "../../assets/data/mapDarkStyle";

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from "react-native-maps";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee

import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";

const HomeMap = (props) => {
  const [cars, setCars] = useState([]);
<<<<<<< HEAD
=======
  const [myPosition, setMyPosition] = useState(null);
  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);

  let colorScheme = useColorScheme();
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listCars));
        setCars(response.data.listCars.items);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCars();
  }, []);

  const getImage = (type) => {
    if (type === "ITaxiX") {
      return require(`../../assets/images/top-UberX.png`);
    }
<<<<<<< HEAD
    if (type === "Comfort") {
=======
    if (type === "Confort") {
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      return require(`../../assets/images/top-Mercedes.png`);
    }
    if (type === "ITaxiXL") {
      return require(`../../assets/images/top-UberXL.png`);
    }
  };
<<<<<<< HEAD
  return (
    <MapView
      style={{ height: 350, width: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 47.046501,
        longitude: 21.918943,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: "contain",
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
=======

  const onUserLocationChange = async (event) => {
    setMyPosition(event.nativeEvent.coordinate);
  };

  const currentLocation = {
    latitude: myPosition?.latitude,
    longitude: myPosition?.longitude,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  const goToCurrentLocation = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(currentLocation, 3 * 1000);
  };

  return (
    <View>
      <MapView
        ref={mapRef}
        style={{ height: 475, width: "100%" }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
        initialRegion={{
          latitude: 47.046501,
          longitude: 21.918943,
          latitudeDelta: 0.1222,
          longitudeDelta: 0.1121,
        }}
        onUserLocationChange={onUserLocationChange}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{ latitude: car?.latitude, longitude: car?.longitude }}
          >
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
      <Pressable
        onPress={() => goToCurrentLocation()}
        style={[styles.roundButton, { bottom: 10, right: 10 }]}
      >
        <Entypo name={"direction"} size={35} color={"#45a8f2"} />
      </Pressable>
    </View>
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
  );
};

export default HomeMap;

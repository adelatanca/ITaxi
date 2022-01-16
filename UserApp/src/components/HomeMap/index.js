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
import MapViewDirections from "react-native-maps-directions";
import mapDarkStyle from "../../assets/data/mapDarkStyle";

import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from "react-native-maps";

import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";

const HomeMap = (props) => {
  const [cars, setCars] = useState([]);
  const [myPosition, setMyPosition] = useState(null);
  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);

  let colorScheme = useColorScheme();

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
    if (type === "Confort") {
      return require(`../../assets/images/top-Mercedes.png`);
    }
    if (type === "ITaxiXL") {
      return require(`../../assets/images/top-UberXL.png`);
    }
  };

  const onUserLocationChange = async (event) => {
    setMyPosition(event.nativeEvent.coordinate);
  };

  const currentLocation = {
    latitude: myPosition?.latitude,
    longitude: myPosition?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  console.log("my poz ", myPosition);
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
        <Entypo name={"direction"} size={35} color={"grey"} />
      </Pressable>
    </View>
  );
};

export default HomeMap;

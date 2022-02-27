import React, { useState, useRef } from "react";
import { Image, useColorScheme, Pressable, View, } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapDarkStyle from "../../assets/data/mapDarkStyle";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

const OrderMap = ({ car }) => {
  // console.log(car);
  const [carPosition, setCarPosition] = useState(null);
  const mapRef = useRef(null);
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

  const currentCarLocation = {
    latitude: car?.latitude,
    longitude: car?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  let colorScheme = useColorScheme();

  const onCarLocationChange = async (event) => {
    setCarPosition(event.nativeEvent.coordinate);
  };
  const goToCurrentCarLocation = () => {
    mapRef.current.animateToRegion(currentCarLocation, 3 * 1000);
  };
  // console.log("theme is ", colorScheme);

  return (
    <View>
      <MapView
        ref={mapRef}
        style={{ height: 500, width: "100%" }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
        initialRegion={{
          latitude: 47.093271,
          longitude: 21.9024223,
          latitudeDelta: 0.5222,
          longitudeDelta: 0.5121,
        }}
        onUserLocationChange={onCarLocationChange}
      >
        {car && (
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
        )}
      </MapView>
      <Pressable
        onPress={() => goToCurrentCarLocation()}
        style={[styles.roundButton, { bottom: 130, right: 15 }]}
      >
        <Entypo name={"direction"} size={35} color={"#45a8f2"} />
      </Pressable>
    </View>
  );
};

export default OrderMap;

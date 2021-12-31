import React, { useState, useEffect } from "react";
import { Image, Appearance, useColorScheme } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapDarkStyle from "../../assets/data/mapDarkStyle";

import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";

const OrderMap = ({ car }) => {
  console.log(car);
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

  let colorScheme = useColorScheme();

  console.log("theme is ", colorScheme);

  return (
    <MapView
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
  );
};

export default OrderMap;

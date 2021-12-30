import React, { useState } from "react";
// import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { Appearance, useColorScheme } from "react-native";
import mapDarkStyle from "../../assets/data/mapDarkStyle";

const GOOGLE_MAPS_APIKEY = "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk";

const RouteMap = ({ origin, destination, passTime, passKm }) => {
  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLocation = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  let colorScheme = useColorScheme();

  const onDirectionFound = (event) => {
    passTime(event.duration);
    passKm(event.distance);
    console.log("event duration is ", event.duration.toString().substr(0, 2));
    //console.log("event distance is ", event.distance);
  };

  return (
    <MapView
      style={{ height: 450, width: "100%" }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
      showsUserLocation={true}
      initialRegion={{
        latitude: 47.0416,
        longitude: 21.9159,
        latitudeDelta: 0.521,
        longitudeDelta: 0.521,
      }}
    >
      <MapViewDirections
        origin={originLocation}
        destination={destinationLocation}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeColor="black"
        strokeWidth={5}
        onReady={onDirectionFound}
        onError={(errorMessage) => {
          console.log(errorMessage);
        }}
      />

      <Marker coordinate={originLocation} title={"Origin"} />
      <Marker coordinate={destinationLocation} title={"Destination"} />
    </MapView>
  );
};

export default RouteMap;

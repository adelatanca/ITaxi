import React from "react";
// import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const GOOGLE_MAPS_APIKEY = "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk";

const RouteMap = (props) => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

  return (
    <MapView
      style={{ height: 450, width: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeColor="black"
        strokeWidth={5}
      />

      <Marker coordinate={origin} title={"Origin"} />
      <Marker coordinate={destination} title={"Destination"} />
    </MapView>
  );
};

export default RouteMap;

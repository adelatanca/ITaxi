import React from "react";
// import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const GOOGLE_MAPS_APIKEY = "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk";

const RouteMap = (props) => {
  const origin = {
    latitude: 47.046501,
    longitude: 21.918943,
  };
  const destination = {
    latitude: 47.146501,
    longitude: 22.918943,
  };

  return (
    <MapView
      style={{ height: 450, width: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 47.046501,
        longitude: 21.918943,
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

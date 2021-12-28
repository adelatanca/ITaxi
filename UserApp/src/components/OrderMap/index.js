import React from "react";
import { Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const OrderMap = ({ car }) => {
  const getImage = (type) => {
    if (type === "ITaxiX") {
      return require(`../../assets/images/top-UberX.png`);
    }
    if (type === "Comfort") {
      return require(`../../assets/images/top-Mercedes.png`);
    }
    if (type === "ITaxiXL") {
      return require(`../../assets/images/top-UberXL.png`);
    }
  };
  return (
    <MapView
      style={{ height: 350, width: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 47.093271,
        longitude: 21.9024223,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
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

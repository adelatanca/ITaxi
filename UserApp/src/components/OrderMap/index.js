import React, { useState } from "react";
import { Image, Appearance, useColorScheme } from "react-native";
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

  const mapDarkStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ];

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

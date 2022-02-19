import React, { useState, useEffect } from "react";
// import styles from "./styles";
import MapViewDirections from "react-native-maps-directions";
import MapView, { PROVIDER_GOOGLE, Marker, View } from "react-native-maps";

import { Appearance, useColorScheme, Image } from "react-native";
import mapDarkStyle from "../../assets/data/mapDarkStyle";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
const GOOGLE_MAPS_APIKEY = "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk";

const RouteMap = ({ origin, destination, passTime, passKm, stop }) => {
  const [cars, setCars] = useState([]);

  const originLocation = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLocation = {
    latitude: destination?.details?.geometry?.location?.lat || destination?.latitude,
    longitude: destination?.details?.geometry?.location?.lng || destination?.longitude,
  };

  const stopLocation = {
    latitude: stop
      ? stop.details.geometry.location.lat
      : destination.details?.geometry?.location?.lat || destination?.latitude,
    longitude: stop
      ? stop.details.geometry.location.lng
      : destination.details?.geometry?.location?.lng || destination?.longitude,
  };
  const wayPoint = [
    {
      latitude: stop
        ? stop.details.geometry.location.lat
        : destination.details?.geometry?.location?.lat || destination?.latitude,
      longitude: stop
        ? stop.details.geometry.location.lng
        : destination.details?.geometry?.location?.lng || destination?.longitude,
    },
  ];


  // const destinationLocationOnMap = {
  //   latitude: destination.latitude,
  //   longitude: destination.longitude,
  // };

  // const stopLocationOnMap = {
  //   latitude: stop
  //     ? stop.details.geometry.location.lat
  //     : destination.latitude,
  //   longitude: stop
  //     ? stop.details.geometry.location.lng
  //     : destination.longitude,
  // };

  // const wayPointOnMap = [
  //   {
  //     latitude: stop
  //       ? stop.details.geometry.location.lat
  //       : destination.latitude,
  //     longitude: stop
  //       ? stop.details.geometry.location.lng
  //       : destination.longitude,
  //   },
  // ];

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

  const onDirectionFound = (event) => {
    passTime(event.duration);
    passKm(event.distance);
    console.log("event duration is ", event.duration.toString().substr(0, 2));
    //console.log("event distance is ", event.distance);
  };

  if (stop != null && stop != false) {
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
          waypoints={wayPoint}
          destination={destinationLocation}
          optimizeWaypoints={true}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="#45a8f2"
          strokeWidth={5}
          onReady={onDirectionFound}
          onError={(errorMessage) => {
            console.log(errorMessage);
          }}
        />
        {cars.map((car) => (
          <Marker
            key={car.id}
            title={car.type}
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

        <Marker coordinate={originLocation} title={"Origin"} />
        <Marker coordinate={stopLocation} title={"Oprire"} />
        <Marker coordinate={destinationLocation} title={"Destination"} />
      </MapView>
    );
  }
  if (stop == null || stop == false) {
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
          strokeColor="#45a8f2"
          strokeWidth={5}
          onReady={onDirectionFound}
          onError={(errorMessage) => {
            console.log(errorMessage);
          }}
        />
        {cars.map((car) => (
          <Marker
            key={car.id}
            title={car.type}
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

        <Marker coordinate={originLocation} title={"Origin"} />
        <Marker coordinate={destinationLocation} title={"Destination"} />
      </MapView>
    );
  }
};

export default RouteMap;

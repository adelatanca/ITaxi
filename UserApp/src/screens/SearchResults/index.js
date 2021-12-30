import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Alert } from "react-native";
// import styles from "./styles";
import ITaxiTypes from "../../components/ITaxiTypes";
import RouteMap from "../../components/RouteMap";

import { useRoute, useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";

const SearchResult = (props) => {
  const typeState = useState({});
  const [time, setTime] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [km, setKm] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  console.log(route.params);

  const { originPlace, destinationPlace } = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();

      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,

        destLatitude: destinationPlace.details.geometry.location.lat,
        destLongitude: destinationPlace.details.geometry.location.lng,

        userId: userInfo.attributes.sub,
        carId: "1",
        status: "NEW",
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        })
      );
      navigation.navigate("OrderPage", { id: response.data.createOrder.id });
    } catch (error) {
      console.error(error);
    }
  };

  const timeConvert = (n) => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    setHours(rhours);
    setMinutes(rminutes);
  };

  useEffect(() => {
    console.log(timeConvert(time));
  }, []);

  console.log("time from search results", time);

  console.log("hours from search result", hours);

  console.log("minutes from search result", minutes);
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 520 }}>
        <RouteMap
          origin={originPlace}
          destination={destinationPlace}
          passTime={(time) => setTime(time)}
          passKm={(km) => setKm(km)}
        />
      </View>
      <View style={{ height: 400 }}>
        <ITaxiTypes
          typeState={typeState}
          onSubmit={onSubmit}
          hours={hours}
          minutes={minutes}
          km={km}
        />
      </View>
    </View>
  );
};

export default SearchResult;

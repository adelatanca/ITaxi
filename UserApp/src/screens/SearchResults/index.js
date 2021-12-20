import React, { useState } from "react";
import { View, Text, Dimensions, Alert } from "react-native";
// import styles from "./styles";
import ITaxiTypes from "../../components/ITaxiTypes";
import RouteMap from "../../components/RouteMap";

import { useRoute, useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createOrder } from "../../graphql/mutations";

const SearchResult = (props) => {
  const typeState = useState({});

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
      };

      const response = await API.graphql(
        graphqlOperation(createOrder, {
          input: input,
        })
      );
      console.log(response);
      Alert.alert("Yeey!", "Your order has been placed!", [
        {
          text: "Go home",
          onPress: () => navigation.navigate("Home"),
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 500 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{ height: 400 }}>
        <ITaxiTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResult;

import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Alert, TouchableOpacity } from "react-native";
// import styles from "./styles";
import OrderMap from "../../components/OrderMap";
import { API, graphqlOperation } from "aws-amplify";
import { getOrder, getCar } from "../../graphql/queries";
import { onOrderUpdated } from "./subscriptions";
import { onCarUpdated } from "./subscriptions";

import { useRoute } from "@react-navigation/native";

const OrderScreen = (props) => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();

  console.log(route.params?.id);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await API.graphql(
          graphqlOperation(getOrder, {
            id: route.params.id,
          })
        );
        setOrder(orderData.data.getOrder);
      } catch (e) {}
    };
    fetchOrder();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onOrderUpdated, { id: route.params.id })
    ).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        setOrder(value.data.onOrderUpdated);
      },
      error: (error) => console.warn(error),
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!order?.carId || order.carId === "1") {
      return;
    }
    const fetchCar = async () => {
      try {
        const carData = await API.graphql(
          graphqlOperation(getCar, {
            id: order.carId,
          })
        );
        setCar(carData.data.getCar);
      } catch (e) {}
    };
    fetchCar();
  }, [order]);

  useEffect(() => {
    if (!order?.carId || order.carId === "1") {
      return;
    }
    const subscription = API.graphql(
      graphqlOperation(onCarUpdated, { id: order.carId })
    ).subscribe({
      next: ({ provider, value }) => {
        console.log({ provider, value });
        // console.log(order.carId);
        setOrder(value.data.onCarUpdated);
      },
      error: (error) => console.warn(error),
    });
    return () => subscription.unsubscribe();
  }, [order]);

  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 300 }}>
        <OrderMap car={car} />
      </View>
      <View>
        <Text>Order status: {order?.status} </Text>
      </View>
    </View>
  );
};

export default OrderScreen;

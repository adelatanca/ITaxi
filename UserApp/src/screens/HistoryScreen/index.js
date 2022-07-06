import React, { useState, useEffect } from "react";
import { Image, FlatList, useColorScheme, Text, View } from "react-native";
import styles from './styles';
import HistoryRow from '../../components/HistoryRow';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers } from '../../graphql/queries';
import { ScrollView } from "react-native-gesture-handler";

const HistoryScreen = (props) => {
  const [orders, setOrders] = useState(null);
  let colorScheme = useColorScheme();

  const fetchOrders = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, { filter: { userId: { eq: userData.attributes.sub } } }),
      );
      setOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.istoricTitle}> Istoric curse </Text>
      <ScrollView>
        {orders?.map((order, i) => (
          <HistoryRow
            orderObject={order}
            orderPrice={order.pret}
            orderDay={order.createdAt.slice(8, 10)}
            orderMonth={order.createdAt.slice(5, 7)}
            orderHour={order.createdAt.slice(11, 16)}
            orderYear={order.createdAt.slice(0, 4)}
            destination={order.destinationName}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

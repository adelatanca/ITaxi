import React, { useState, useEffect } from 'react';
import { Image, Appearance, useColorScheme, Text, View, Pressable } from 'react-native';
import HistoryRow from '../../components/HistoryRow';
import { ScrollView } from "react-native-gesture-handler";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers } from '../../graphql/queries';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const HistoryScreen = props => {
  const [orders, setOrders] = useState(null);
  let colorScheme = useColorScheme();
  const navigation = useNavigation();
  const fetchOrders = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, { filter: { carId: { eq: userData.attributes.sub } } }),
      );
      setOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  const goToStats = () => {
    navigation.navigate('Statistici');
  };

  console.log({ orders })

  return (
    <View style={styles.container}>
      <View style={styles.statsTitle}>
        <Text style={styles.istoricTitle}> Istoric comenzi </Text>
        <Pressable onPress={() => { goToStats() }}>
          <Ionicons style={styles.stats} name={"stats-chart-sharp"} size={30} color={"#45a8f2"} />
        </Pressable>
      </View>


      <ScrollView>
        {orders?.map((order, i) => (
          <HistoryRow
            orderObject={order}
            orderPrice={order.pret}
            orderDay={order.createdAt.slice(8, 10)}
            orderMonth={order.createdAt.slice(5, 7)}
            orderHour={order.createdAt.slice(11, 16)}
            orderYear={order.createdAt.slice(0, 4)}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryScreen;

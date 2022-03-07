import React, { useState, useEffect } from "react";
import { Image, Appearance, useColorScheme, Text, View, Pressable } from "react-native";
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers } from '../../graphql/queries';

import { useNavigation } from '@react-navigation/native';

const HistoryRow = ({ orderPrice, orderDay, orderMonth, orderHour }) => {
    const [orders, setOrders] = useState(null);
    const [orderMonthName, setOrderMonthName] = useState(null);
    let colorScheme = useColorScheme();
    const navigation = useNavigation();

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

    const goToHistorySpecificScreen = () => {
        navigation.navigate('Istoric specific');
    }

    const getMonth = () => {
        switch (orderMonth) {
            case '01':
                setOrderMonthName("ian");
                break;
            case '02':
                setOrderMonthName("feb");
                break;
            case '03':
                setOrderMonthName("mar");
                break;
            case '04':
                setOrderMonthName("apr");
                break;
            case '05':
                setOrderMonthName("mai");
                break;
            case '06':
                setOrderMonthName("iun");
                break;
            case '07':
                setOrderMonthName("iul");
                break;
            case '08':
                setOrderMonthName("aug");
                break;
            case '09':
                setOrderMonthName("sept");
                break;
            case '10':
                setOrderMonthName("oct");
                break;
            case '11':
                setOrderMonthName("nov");
                break;
            case '12':
                setOrderMonthName("dec");
                break;
            default: return;

        }
    }

    useEffect(() => {
        getMonth();
    }, []);


    return (
        <Pressable onPress={() => { console.log("PRESSED"); goToHistorySpecificScreen() }} style={styles.container}>
            <View style={styles.row}>
                <AntDesign name={"car"} size={25} color={"#45a8f2"} />
            </View>
            <View>
                <Text style={styles.date}>{orderDay} {orderMonthName}., {orderHour}</Text>
                <Text style={styles.price}>LEI {orderPrice}</Text>
            </View>

        </Pressable>
    );
};

export default HistoryRow;

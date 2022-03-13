import React, { useState, useEffect } from "react";
import { Image, Appearance, useColorScheme, Text, View, Pressable } from "react-native";
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers, getUser } from '../../graphql/queries';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const HistoryRow = ({ orderObject, orderPrice, orderDay, orderMonth, orderHour, orderYear, destination }) => {
    const [orders, setOrders] = useState(null);
    const [orderMonthName, setOrderMonthName] = useState(null);
    const [destinatie, setDestinatie] = useState(null);
    const [client, setClient] = useState(null);
    let colorScheme = useColorScheme();
    const navigation = useNavigation();
    let dateString = `${orderMonth}/${orderDay}/${orderYear}`
    let date = new Date(dateString);
    let day = date.toLocaleString('RO', { weekday: 'long' });

    const fetchClient = async () => {
        try {
            const user = await API.graphql(graphqlOperation(getUser, { id: orderObject.userId }));
            setClient(user.data.getUser);
        } catch (e) {
            console.log(e);
        }
    };

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
        fetchClient();
    }, []);

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
        <Pressable onPress={() => { console.log("history driver") }} style={styles.container}>
            <View style={styles.insideContainer}>
                <Text style={styles.clientName} ellipsizeMode='tail' numberOfLines={1}>Cursa cu {client?.username}</Text>
                <Text style={styles.clientPhone}> <AntDesign name={"phone"} size={13} color={"#45a8f2"} /> 073838383</Text>
                <Text style={styles.plataTitle}>Plata</Text>
                <Text style={styles.paymentMethod}>{orderObject.paymentMethod} {orderObject.paymentMethod === 'Numerar' ? <Ionicons name={"cash-outline"} size={16} color={"#45a8f2"} /> : <AntDesign
                    name={"creditcard"}
                    size={16}
                    color={"#45a8f2"}
                    style={{ top: 7 }}
                />}</Text>
                <Text style={styles.price}>LEI {orderPrice}</Text>
                <Text style={styles.date}>{day} {orderDay} {orderMonthName}., {orderHour}</Text>
            </View>
        </Pressable>
    );
};

export default HistoryRow;

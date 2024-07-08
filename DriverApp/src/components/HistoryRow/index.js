import React, { useState, useEffect } from "react";
import { Image, Appearance, useColorScheme, Text, View, Pressable } from "react-native";
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listOrders, listUsers, getUser } from '../../graphql/queries';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from 'moment';

const HistoryRow = ({ orderObject, orderPrice, orderDay, orderMonth, orderHour, orderYear, destination }) => {
    const [orders, setOrders] = useState(null);
    const [orderMonthName, setOrderMonthName] = useState(null);
    const [destinatie, setDestinatie] = useState(null);
    const [client, setClient] = useState(null);
    let colorScheme = useColorScheme();
    const navigation = useNavigation();
    const [destinationTime, setDestinationTime] = useState(null);
    const [stopTime, setStopTime] = useState(null);
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

    const calculateHours = () => {
        var duration = Math.round(orderObject.duration);
        if (orderObject.stopName === null) {
            setDestinationTime(moment(orderObject.createdAt, "YYYY/MM/DD HH:mm").add(duration, 'minutes').format('HH:mm'));
        }
        else {
            setStopTime(moment(orderObject.createdAt, "YYYY/MM/DD HH:mm").add(duration / 2, 'minutes').format('HH:mm'));
            setDestinationTime(moment(orderObject.createdAt, "YYYY/MM/DD HH:mm").add(duration, 'minutes').format('HH:mm'));
        }
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
        calculateHours();
    }, []);


    if (orderObject?.stopName === null) {
        return (
            <Pressable onPress={() => { console.log("") }} style={styles.container}>
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
                    <Text style={styles.originNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.originName}</Text>
                    <Text style={styles.originHour}>{orderHour}</Text>
                    <Text style={styles.destinationNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.destinationName}</Text>
                    <Text style={styles.destinationHour}>{destinationTime}</Text>
                    <View style={styles.circle} />
                    <View style={styles.line} />
                    <View style={styles.pin}>
                        <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
                    </View>
                </View>
            </Pressable >
        );
    }
    else if (orderObject.stopName != null) {
        return (
            <Pressable onPress={() => { console.log("") }} style={styles.container}>
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
                    <Text style={styles.originNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.originName}</Text>
                    <Text style={styles.originHour}>{orderHour}</Text>

                    {/*HERE PUT THE STOP NAME INSTEAD OF DESTINATION NAME*/}
                    <Text style={styles.destinationNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.stopName}</Text>
                    <Text style={styles.destinationHour}>{stopTime}</Text>

                    {/*HERE PUT THE DESTINATION NAME INSTEAD OF STOP NAME*/}
                    <Text style={styles.stopNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.destinationName}</Text>
                    <Text style={styles.stopHour}>{destinationTime}</Text>


                    <View style={styles.circle} />
                    <View style={styles.circleStop} />
                    <View style={styles.lineStop} />
                    <View style={styles.pinStop}>
                        <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
                    </View>

                </View>
            </Pressable>
        );
    }
};

export default HistoryRow;

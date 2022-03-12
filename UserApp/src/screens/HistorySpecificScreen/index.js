import React, { useState, useEffect } from "react";
import { View, Pressable, Text } from "react-native";
import styles from "../HistorySpecificScreen/styles";
import UserAvatar from 'react-native-user-avatar';
import { useRoute, useNavigation } from "@react-navigation/native";
import HistoryMap from "../../components/HistoryMap";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";

const HistorySpecificScreen = () => {
    const navigation = useNavigation();
    const [cars, setCars] = useState([]);
    const [driverName, setDriverName] = useState(null);
    const route = useRoute();
    const { orderYear, orderDay, orderMonth, orderObject, orderMonthName } = route.params;
    let dateString = `${orderMonth}/${orderDay}/${orderYear}`
    let date = new Date(dateString);
    let day = date.toLocaleString('RO', { weekday: 'long' });


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

    useEffect(() => {
        cars.map(car => {
            if (car.id === orderObject.carId) {
                console.log(car.username)
                setDriverName(car.username)
            }
        })
    })

    const goToHistoryScreen = () => {
        navigation.navigate("Istoric");
    }

    if (orderObject.stopName === null) {
        return (
            <View style={styles.container}>
                <Pressable onPress={() => { console.log("Dots") }} style={styles.dots}>
                    <Entypo name={"dots-three-horizontal"} size={20} color={"#45a8f2"} />
                </Pressable>
                <Pressable onPress={() => { goToHistoryScreen(), console.log("Hist") }} style={styles.backButton}>
                    <AntDesign name={"back"} size={25} color={"#45a8f2"} />
                </Pressable>
                <View style={styles.avatarDateName}>
                    <Text style={styles.driverName}>Cursa cu {driverName}</Text>
                    <Text style={styles.orderDate}>{day}, {orderDay} {orderMonthName}. {orderYear}</Text>
                    <UserAvatar size={55} style={styles.avatar} name={"Ade"} />
                </View>
                <HistoryMap style={styles.map} orderObject={orderObject} />

                <Text style={styles.originNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.originName}</Text>
                <Text style={styles.originHour}>16:44</Text>
                <Text style={styles.destinationNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.destinationName}</Text>
                <Text style={styles.destinationHour}>16:55</Text>

                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.pin}>
                    <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
                </View>

                <Pressable onPress={() => { console.log("Rating") }} style={styles.ratingButton}>
                    <Text style={styles.rating}>Ofera soferului ratingul tau </Text>
                    <AntDesign name={"star"} size={26} color={"#fef20c"} style={{ left: 40 }} />
                </Pressable>

                <View style={styles.plata}>
                    <View style={styles.divider}>
                    </View>
                    <Text style={styles.titluPlata}>Plata</Text>
                    <View style={styles.metodaPlata}>
                        <Text style={styles.textMetodaPlata}>Metoda de plata</Text>
                        <Text style={styles.paymentMethod}>{orderObject.paymentMethod} {orderObject.paymentMethod === 'Numerar' ? <Ionicons name={"cash-outline"} size={18} color={"#45a8f2"} /> : <AntDesign
                            name={"creditcard"}
                            size={18}
                            color={"#45a8f2"}
                            style={{ top: 7 }}
                        />}</Text>
                    </View>
                    <View style={styles.tarif}>
                        <Text style={styles.titluTarif}>Tarif ITaxi</Text>
                        <Text style={styles.pret}>{orderObject.pret} LEI</Text>
                    </View>
                </View>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container}>
                <Pressable onPress={() => { console.log("Dots") }} style={styles.dots}>
                    <Entypo name={"dots-three-horizontal"} size={20} color={"#45a8f2"} />
                </Pressable>
                <Pressable onPress={() => { goToHistoryScreen(), console.log("Hist") }} style={styles.backButton}>
                    <AntDesign name={"back"} size={25} color={"#45a8f2"} />
                </Pressable>
                <View style={styles.avatarDateName}>
                    <Text style={styles.driverName}>Cursa cu {driverName}</Text>
                    <Text style={styles.orderDate}>{day}, {orderDay} {orderMonthName}. {orderYear}</Text>
                    <UserAvatar size={55} style={styles.avatar} name={"Ade"} />
                </View>
                <HistoryMap style={styles.map} orderObject={orderObject} />

                <Text style={styles.originNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.originName}</Text>
                <Text style={styles.originHour}>16:44</Text>

                {/*HERE PUT THE STOP NAME INSTEAD OF DESTINATION NAME*/}
                <Text style={styles.destinationNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.stopName}</Text>
                <Text style={styles.destinationHour}>16:55</Text>

                {/*HERE PUT THE DESTINATION NAME INSTEAD OF STOP NAME*/}
                <Text style={styles.stopNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.destinationName}</Text>
                <Text style={styles.stopnHour}>16:49</Text>

                <View style={styles.circle} />
                <View style={styles.circleStop} />
                <View style={styles.lineStop} />
                <View style={styles.pinStop}>
                    <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
                </View>

                <Pressable onPress={() => { console.log("Rating") }} style={styles.ratingButton}>
                    <Text style={styles.rating}>Ofera soferului ratingul tau </Text>
                    <AntDesign name={"star"} size={26} color={"#fef20c"} style={{ left: 40 }} />
                </Pressable>

                <View style={styles.plata}>
                    <View style={styles.divider}>
                    </View>
                    <Text style={styles.titluPlata}>Plata</Text>
                    <View style={styles.metodaPlata}>
                        <Text style={styles.textMetodaPlata}>Metoda de plata</Text>
                        <Text style={styles.paymentMethod}>{orderObject.paymentMethod} {orderObject.paymentMethod === 'Numerar' ? <Ionicons name={"cash-outline"} size={18} color={"#45a8f2"} /> : <AntDesign
                            name={"creditcard"}
                            size={18}
                            color={"#45a8f2"}
                            style={{ top: 7 }}
                        />}</Text>
                    </View>
                    <View style={styles.tarif}>
                        <Text style={styles.titluTarif}>Tarif ITaxi</Text>
                        <Text style={styles.pret}>{orderObject.pret} LEI</Text>
                    </View>
                </View>
            </View>
        );
    }

};

export default HistorySpecificScreen;

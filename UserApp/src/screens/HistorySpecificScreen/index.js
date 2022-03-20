import React, { useState, useEffect } from "react";
import { View, Pressable, Text, Image, Modal, Alert, } from "react-native";
import styles from "../HistorySpecificScreen/styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import HistoryMap from "../../components/HistoryMap";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { API, graphqlOperation } from "aws-amplify";
import { listCars } from "../../graphql/queries";
import { getOrder, getCar, getUser } from "../../graphql/queries";
import moment from 'moment';
import StarRating from "react-native-star-rating";

const HistorySpecificScreen = () => {
    const navigation = useNavigation();
    const [cars, setCars] = useState([]);
    const [driverName, setDriverName] = useState(null);
    const [driverImage, setDriverImage] = useState(null);
    const [stopTime, setStopTime] = useState(null);
    const [destinationTime, setDestinationTime] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const [rating, setRating] = useState(2.5);
    const { orderYear, orderDay, orderMonth, orderObject, orderMonthName, orderHour } = route.params;
    let dateString = `${orderMonth}/${orderDay}/${orderYear}`
    let date = new Date(dateString);
    let day = date.toLocaleString('RO', { weekday: 'long' });

    const fetchUser = async () => {
        try {
            const userData = await API.graphql(
                graphqlOperation(getUser, { id: orderObject.carId })
            );
            setDriverImage(userData.data.getUser);
        } catch (e) { }
    };

    useEffect(() => {
        fetchUser();
        calculateHours();
    }, []);

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
                setDriverName(car.username)
            }
        })
    })

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

    const sendRating = () => {
        Alert.alert('Multumim pentru rating!', '', [
            {
                text: 'Închide',
            }
        ]);
    }



    const onStarRatingPress = (rating) => {
        setRating(rating);
    };

    useEffect(() => {
        console.log(rating);
    }, [rating]);

    const renderModalData = () => {
        if (modalVisible) {
            return (
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Ratingul tău</Text>
                                <Pressable
                                    style={styles.buttonClose}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <AntDesign name={"close"} size={30} color={"#45a8f2"} />
                                </Pressable>
                                <Text style={styles.ratingContainer}>
                                    <StarRating
                                        style={styles.textStyle}
                                        halfStarEnabled={true}
                                        maxStars={5}
                                        rating={rating}
                                        fullStarColor={"gold"}
                                        selectedStar={(rating) => onStarRatingPress(rating)}
                                    />
                                </Text>
                                <Pressable
                                    style={styles.buttonSendRating}
                                    onPress={() => { sendRating(), setModalVisible(!modalVisible) }}>
                                    <Text style={styles.buttonSendText}>Trimite</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            );
        }
    };

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
                    <Text style={styles.driverName}>Cursă cu {driverName}, {orderObject.type}</Text>
                    <Text style={styles.orderDate}>{day}, {orderDay} {orderMonthName}. {orderYear}</Text>
                    <View style={styles.avatar}>
                        <Image
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 30,
                            }}
                            source={{ uri: driverImage?.profilePicture }}
                        />
                    </View>
                </View>
                <HistoryMap style={styles.map} orderObject={orderObject} />

                <Text style={styles.originNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.originName}</Text>
                <Text style={styles.originHour}>{orderHour}</Text>
                <Text style={styles.destinationNameStreet} numberOfLines={1} ellipsizeMode='tail'>{orderObject.destinationName}</Text>
                <Text style={styles.destinationHour}>{destinationTime}</Text>

                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.pin}>
                    <Entypo name={"location-pin"} size={23} color={"#4a5ef5de"} />
                </View>

                <Pressable onPress={() => { console.log("Rating"), setModalVisible(true) }} style={styles.ratingButton}>
                    <Text style={styles.rating}>Oferă șoferului ratingul tău</Text>
                    <AntDesign name={"star"} size={26} color={"#fef20c"} style={{ left: 40 }} />
                </Pressable>

                <View style={styles.plata}>
                    <View style={styles.divider}>
                    </View>
                    <Text style={styles.titluPlata}>Plată</Text>
                    <View style={styles.metodaPlata}>
                        <Text style={styles.textMetodaPlata}>Metoda de plată</Text>
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
                {renderModalData()}
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
                    <Text style={styles.driverName}>Cursă cu {driverName}, {orderObject.type}</Text>

                    <View style={styles.avatar}>
                        <Image
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 30,
                                backgroundColor: 'blue'
                            }}
                            source={{ uri: driverImage?.profilePicture }}
                        />
                    </View>
                    <Text style={styles.orderDate}>{day}, {orderDay} {orderMonthName}. {orderYear}</Text>
                </View>
                <HistoryMap style={styles.map} orderObject={orderObject} />

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

                <Pressable onPress={() => { console.log("Rating"), setModalVisible(true) }} style={styles.ratingButton}>
                    <Text style={styles.rating}>Oferă șoferului ratingul tău</Text>
                    <AntDesign name={"star"} size={26} color={"#fef20c"} style={{ left: 40 }} />
                </Pressable>

                <View style={styles.plata}>
                    <View style={styles.divider}>
                    </View>
                    <Text style={styles.titluPlata}>Plată</Text>
                    <View style={styles.metodaPlata}>
                        <Text style={styles.textMetodaPlata}>Metoda de plată</Text>
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
                {renderModalData()}
            </View>
        );
    }

};

export default HistorySpecificScreen;

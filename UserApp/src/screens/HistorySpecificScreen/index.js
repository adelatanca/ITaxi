import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "../HistorySpecificScreen/styles";
import UserAvatar from 'react-native-user-avatar';
import { useRoute, useNavigation } from "@react-navigation/native";
import HistoryMap from "../../components/HistoryMap";

const HistorySpecificScreen = () => {
    let driverName = "Costica";
    const route = useRoute();
    const { orderYear, orderDay, orderMonth, orderObject, orderMonthName } = route.params;
    // console.log("YERAR ", orderYear)
    let dateString = `${orderMonth}/${orderDay}/${orderYear}`
    let date = new Date(dateString);
    let day = date.toLocaleString('RO', { weekday: 'long' });
    console.log(day);

    return (
        <View style={styles.container}>
            <View style={styles.avatarDateName}>
                <Text style={styles.driverName}>Cursa cu {driverName}</Text>
                <Text style={styles.orderDate}>{day}, {orderDay} {orderMonthName}. {orderYear}</Text>
                <UserAvatar size={55} style={styles.avatar} name={"Ade"} />
            </View>
            <HistoryMap style={styles.map} />
        </View>
    );
};

export default HistorySpecificScreen;

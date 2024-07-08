import React, { useState } from "react";
import { Image, useColorScheme, View, } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapDarkStyle from "../../assets/data/mapDarkStyle";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";


const HistoryMap = ({ orderObject }) => {
    let colorScheme = useColorScheme();
    let stop = true;
    const originLocation = {
        latitude: orderObject?.originLatitude,
        longitude: orderObject?.originLongitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const destinationLocation = {
        latitude: orderObject?.destLatitude,
        longitude: orderObject?.destLongitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const stopLocation = {
        latitude: orderObject?.stopLatitude,
        longitude: orderObject?.stopLongitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }

    if (orderObject?.stopName != null) {
        return (
            <View style={styles.map}>
                <MapView
                    style={{ height: 220, width: "100%", borderRadius: 20 }}
                    provider={PROVIDER_GOOGLE}
                    // customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 47.0416,
                        longitude: 21.9159,
                        latitudeDelta: 0.521,
                        longitudeDelta: 0.521,
                    }}
                >

                    <Marker coordinate={originLocation} title={"Origine"} pinColor="#108ef0" />
                    <Marker coordinate={stopLocation} title={"Oprire"} pinColor="#a54bffbd" />
                    <Marker coordinate={destinationLocation} title={"Destinatie"} pinColor="#7110f0" />
                </MapView>
            </View>
        );
    }
    if (orderObject?.stopName === null) {
        return (
            <View style={styles.map}>
                <MapView
                    style={{ height: 220, width: "100%", borderRadius: 20 }}
                    provider={PROVIDER_GOOGLE}
                    // customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 47.0416,
                        longitude: 21.9159,
                        latitudeDelta: 0.521,
                        longitudeDelta: 0.521,
                    }}
                >
                    <Marker coordinate={originLocation} title={"Origine"} pinColor="#108ef0" />
                    <Marker coordinate={destinationLocation} title={"Destinatie"} pinColor="#7110f0" />
                </MapView>
            </View>
        );
    }
};

export default HistoryMap;

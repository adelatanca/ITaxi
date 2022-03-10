import React, { useState } from "react";
import { Image, useColorScheme, View, } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import mapDarkStyle from "../../assets/data/mapDarkStyle";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";


const HistoryMap = () => {
    let colorScheme = useColorScheme();
    let stop = true;
    const currentCarLocation = {
        latitude: 47.02881859999999,
        longitude: 21.8989388,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const destinationLocation = {
        latitude: 47.0622573,
        longitude: 21.9279491,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    if (stop != null || stop != false) {
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

                    <Marker coordinate={currentCarLocation} title={"Origin"} pinColor="#108ef0" />
                    <Marker coordinate={destinationLocation} title={"Oprire"} pinColor="#a54bffbd" />
                    <Marker coordinate={destinationLocation} title={"Destination"} pinColor="#7110f0" />
                </MapView>
            </View>
        );
    }
    if (stop == null || stop == false) {
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

                    <Marker coordinate={currentCarLocation} title={"Origin"} />
                    <Marker coordinate={destinationLocation} title={"Destination"} />
                </MapView>
            </View>
        );
    }
};

export default HistoryMap;

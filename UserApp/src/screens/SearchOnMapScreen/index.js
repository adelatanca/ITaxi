import React, { useState, useRef, useEffect } from 'react';
import { View, Image, useColorScheme, Dimensions, Pressable, Text, } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapDarkStyle from "../../assets/data/mapDarkStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from '../SearchOnMapScreen/styles';

const GOOGLE_MAPS_APIKEY = "AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk";

const SearchOnMapScreen = () => {
    const [region, setRegion] = useState(null);
    const [myPosition, setMyPosition] = useState(null);
    const [destinatie, setDestinatie] = useState(null);
    const mapRef = useRef(null);
    let colorScheme = useColorScheme();
    const navigation = useNavigation();

    const initialRegion = {
        latitude: 47.0416,
        longitude: 21.9159,
        latitudeDelta: 0.31,
        longitudeDelta: 0.321,
    }
    const currentLocation = {
        latitude: myPosition?.latitude,
        longitude: myPosition?.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    const onChangeValue = region => {

        // alert(JSON.stringify(region))
        setRegion(region);
        console.log("THEREGION ", region)
    }


    const getDestinationAddress = () => {
        fetch(
            'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            region?.latitude +
            ',' +
            region?.longitude +
            '&key=' +
            GOOGLE_MAPS_APIKEY,
        )
            .then(response => response.json())
            .then(responseJson => {
                const responseAdd = responseJson.results.map(
                    address => address.formatted_address,
                );
                //   console.log('FORMATAT ' + JSON.stringify(responseAdd[3]));
                setDestinatie(responseAdd[3]);
            });
    };

    const onUserLocationChange = async (event) => {
        setMyPosition(event.nativeEvent.coordinate);
    };

    const goToDestinationSearch = () => {
        navigation.navigate("DestinationSearch", region,
            destinatie);
    }
    const goToCurrentPosition = () => {
        mapRef.current.animateToRegion(currentLocation, 3 * 1000);
    }

    useEffect(() => {
        getDestinationAddress();
    });

    const sendToDestinationSearchInput = () => {
        navigation.navigate("DestinationSearch", {
            region,
            destinatie
        });
    }

    return (

        <View style={{ display: "flex" }}>
            <View style={{ height: Dimensions.get("window").height - 300 }}>
                <MapView
                    ref={mapRef}
                    style={{ flex: 1 }}
                    customMapStyle={colorScheme == "light" ? [] : mapDarkStyle}
                    initialRegion={initialRegion}
                    onRegionChangeComplete={onChangeValue}
                    onUserLocationChange={onUserLocationChange}
                    showsUserLocation={true}
                    provider={PROVIDER_GOOGLE}
                />
                <View style={{ top: '50%', left: '50%', marginLeft: -24, marginTop: -48, position: "absolute" }}>
                    <Image style={{ height: 40, width: 40 }} source={require('../../assets/images/map-marker.png')} />
                </View>
                <Pressable onPress={() => goToDestinationSearch()} style={styles.backButton}>
                    <AntDesign name={"back"} size={25} color={"#45a8f2"} />
                </Pressable>
                <Pressable onPress={() => goToCurrentPosition()} style={styles.currentPositionButton}>
                    <Entypo name={"direction"} size={25} color={"#45a8f2"} />
                </Pressable>
            </View>


            <View style={styles.container}>
                <Text style={styles.confirm}>Confirmă locația</Text>
                <Entypo style={styles.locationPin} name={"location-pin"} size={25} color={"#45a8f2"} />
                <Text style={styles.street} numberOfLines={1} ellipsizeMode='tail'>{destinatie}</Text>
                <Pressable style={styles.editButton} onPress={() => goToDestinationSearch()}>
                    <AntDesign name={"edit"} size={25} color={"#45a8f2"} />
                </Pressable>
                <Pressable
                    style={styles.confirmButton}
                    onPress={() => sendToDestinationSearchInput()}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
                        Confirmare
                    </Text>
                </Pressable>

            </View>
        </View>

    )
}
export default SearchOnMapScreen;
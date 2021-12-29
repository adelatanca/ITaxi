import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Appearance,
  Button,
  useColorScheme,
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getCar} from '../../graphql/queries';
import {listOrders} from '../../graphql/queries';
import {updateCar, updateOrder} from '../../graphql/mutations';
import mapDarkStyle from '../../assets/data/mapDarkStyle';

import {getDistance} from 'geolib';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk';

const originLocation = {
  latitude: 47.093271,
  longitude: 21.9024223,
};

const destinationLocation = {
  latitude: 47.0411391,
  longitude: 21.9259096,
};

const HomeScreen = () => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);
  const [myPosition, setMyPosition] = useState(null);

  const [distance, setDistance] = useState(null);

  const [newOrders, setNewOrders] = useState([
    // {
    //   id: '1',
    //   type: 'ITaxiX',
    //   originLatitude: 37.785999,
    //   originLongitude: -122.406417,
    //   destLatitude: 37.79825,
    //   destLongitude: -122.4324,
    //   //    destLatitude: 37.787999,
    //   // destLongitude: -122.406417,  for testing COMPLETE ITAXI RED btn
    //   user: {
    //     rating: 3.0,
    //     name: 'Adela',
    //   },
    // },
    // {
    //   id: '2',
    //   type: 'Comfort',
    //   originLatitude: 37.785999,
    //   originLongitude: -122.406417,
    //   destLatitude: 37.79825,
    //   destLongitude: -122.4324,
    //   //    destLatitude: 37.787999,
    //   // destLongitude: -122.406417,  for testing COMPLETE ITAXI RED btn
    //   user: {
    //     rating: 3.0,
    //     name: 'Maria',
    //   },
    // },
  ]);

  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);

  let colorScheme = useColorScheme();

  const calculateDistance = () => {
    console.log('calc dist is called');
    if (newOrders[0]) {
      var dis = getDistance(
        {
          latitude: newOrders[0].originLatitude,
          longitude: newOrders[0].originLongitude,
        },
        {
          latitude: newOrders[0].destLatitude,
          longitude: newOrders[0].destLongitude,
        },
      );
      dis = dis / 1000;
      setDistance(dis);
      console.log(dis);
    }
  };

  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const carData = await API.graphql(
        graphqlOperation(getCar, {id: userData.attributes.sub}),
      );
      setCar(carData.data.getCar);
      console.log('Car is ', car);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchOrders = async () => {
    try {
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, {filter: {status: {eq: 'NEW'}}}),
      );
      setNewOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCar();
    fetchOrders();
  }, []);

  const onDecline = () => {
    //  console.log(newOrders);
    setNewOrders(newOrders.slice(1));
  };

  const onAccept = async newOrder => {
    try {
      const input = {
        id: newOrder.id,
        status: 'PICKING_UP_CLIENT',
        carId: car.id,
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(orderData.data.updateOrder);
    } catch (e) {
      console.log(e);
    }
    setNewOrders(newOrders.slice(1));
  };

  const onGoPress = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const input = {
        id: userData.attributes.sub,
        isActive: !car.isActive,
      };

      const updatedCar = await API.graphql(
        graphqlOperation(updateCar, {input}),
      );
      setCar(updatedCar.data.updateCar);
    } catch (e) {
      console.log(e);
    }
  };

  const onUserLocationChange = async event => {
    console.log('event native', event.nativeEvent.coordinate);
    setMyPosition(event.nativeEvent.coordinate);

    const {latitude, longitude, heading} = event.nativeEvent.coordinate;

    try {
      const userData = await Auth.currentAuthenticatedUser();

      const input = {
        id: userData.attributes.sub,
        latitude,
        longitude,
        heading,
      };

      const updatedCar = await API.graphql(
        graphqlOperation(updateCar, {input}),
      );
      setCar(updatedCar.data.updateCar);
    } catch (e) {
      console.log(e);
    }
  };

  const currentLocation = {
    latitude: myPosition.latitude,
    longitude: myPosition.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goToCurrentLocation = () => {
    //complete this animation in 3 seconds
    mapRef.current.animateToRegion(currentLocation, 3 * 1000);
  };

  const onDirectionFound = event => {
    console.log(' order is ', order);
    console.log('event is ', event.distance);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 1,
        isFinished: order.pickedUp && event.distance < 1,
      });
    }
  };

  const getDestination = () => {
    if (order && order.pickedUp) {
      return {
        latitude: order.destLatitude,
        longitude: order.destLongitude,
      };
    }
    return {
      latitude: order.originLatitude,
      longitude: order.originLongitude,
    };
  };

  const renderBottomTitle = () => {
    // console.log(' order is ', order);
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'red',
              justifyContent: 'center',
              width: 200,
              padding: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Complete {order.type}{' '}
            </Text>
          </View>
          <Text style={styles.bottomText}> {order.username}</Text>
        </View>
      );
    }

    if (order && order.pickedUp) {
      console.log('order username is', order.username);
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text> {order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={{
                backgroundColor: 'red',
                width: 35,
                height: 35,
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Entypo name={'user'} size={35} color={'white'} />
            </View>
            <Text> {order.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Dropping off {order.username}</Text>
        </View>
      );
    }

    if (order) {
      console.log(order);
      console.log('is ordeer');
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text> {order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={{
                backgroundColor: 'green',
                width: 35,
                height: 35,
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Entypo name={'user'} size={35} color={'white'} />
            </View>
            <Text> {order.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Picking up {order.username}</Text>
        </View>
      );
    }

    if (car?.isActive) {
      return <Text style={styles.bottomText}> You're online</Text>;
    } else {
      return <Text style={styles.bottomText}> You're offline</Text>;
    }
  };

  return (
    <View>
      <MapView
        ref={mapRef}
        style={{height: Dimensions.get('window').height - 150, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        customMapStyle={colorScheme == 'light' ? [] : mapDarkStyle}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 47.0411391,
          longitude: 21.9259096,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={region => setRegion(region)}>
        {order && (
          <MapViewDirections
            origin={{
              latitude: car?.latitude,
              longitude: car?.longitude,
            }}
            // origin={myPosition}
            onReady={onDirectionFound}
            onError={errorMessage => {
              console.log(errorMessage);
            }}
            lineDashPattern={[0]}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="pink"
            strokeWidth={5}
          />
        )}

        <Marker coordinate={originLocation} title={'Origin'} />
        <Marker coordinate={destinationLocation} title={'Destination'} />
      </MapView>

      <Pressable
        onPress={() => console.warn('Balance')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{color: 'green'}}>LEI </Text>
          0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('hey')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={'menu'} size={35} color={'grey'} />
      </Pressable>

      <Pressable
        onPress={() => console.warn('hey')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name={'menu'} size={35} color={'grey'} />
      </Pressable>

      <Pressable
        onPress={() => console.warn('hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={'menu'} size={35} color={'grey'} />
      </Pressable>

      <Pressable
        onPress={() => goToCurrentLocation()}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={'direction'} size={35} color={'grey'} />
      </Pressable>

      <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{car?.isActive ? 'END' : 'GO'}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={35} color={'grey'} />
        {renderBottomTitle()}
        <Entypo name={'menu'} size={35} color={'grey'} />
      </View>

      {newOrders.length > 0 && !order && (
        <NewOrderPopup
          newOrder={newOrders[0]}
          //   duration={orderDuration}
          distance={distance}
          //  onDecline={onDecline}
          onDecline={calculateDistance}
          onAccept={() => onAccept(newOrders[0])}
        />
      )}
    </View>
  );
};
export default HomeScreen;

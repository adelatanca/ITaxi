import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getCar} from '../../graphql/queries';
import {updateCar} from '../../graphql/mutations';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk';

const originLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const destinationLocation = {
  latitude: 37.771707,
  longitude: -122.4053769,
};

const HomeScreen = () => {
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);
  const [myPosition, setMyPosition] = useState(null);

  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'ITaxiX',
    originLatitude: 37.785999,
    originLongitude: -122.406417,
    destLatitude: 37.79825,
    destLongitude: -122.4324,
    //    destLatitude: 37.787999,
    // destLongitude: -122.406417,  for testing COMPLETE ITAXI RED btn
    user: {
      rating: 3.0,
      name: 'Adela',
    },
  });

  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const carData = await API.graphql(
        graphqlOperation(getCar, {id: userData.attributes.sub}),
      );
      setCar(carData.data.getCar);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const onDecline = () => {
    setNewOrder(null);
  };

  const onAccept = newOrder => {
    setOrder(newOrder);
    console.log('order is ', order);
    setNewOrder(null);
    console.log('new order after null ', newOrder);
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

  const onUserLocationChange = event => {
    console.log(event.nativeEvent.coordinate);
    setMyPosition(event.nativeEvent.coordinate);
  };

  const onDirectionFound = event => {
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 1.5,
        isFinished: order.pickedUp && event.distance < 1.5,
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
          <Text style={styles.bottomText}> {order.user.name}</Text>
        </View>
      );
    }

    if (order && order.pickedUp) {
      console.log('order picked up red ', order.pickedUp);
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
          <Text style={styles.bottomText}>Dropping off {order.user.name}</Text>
        </View>
      );
    }

    if (order) {
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
          <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
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
        style={{height: Dimensions.get('window').height - 150, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {order && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
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
          <Text style={{color: 'green'}}>$</Text>
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
        onPress={() => console.warn('hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={'menu'} size={35} color={'grey'} />
      </Pressable>

      <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{car?.isActive ? 'END' : 'GO'}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={35} color={'grey'} />
        {renderBottomTitle()}
        <Entypo name={'menu'} size={35} color={'grey'} />
      </View>

      {newOrder && (
        <NewOrderPopup
          newOrder={newOrder}
          duration={2}
          distance={1.4}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
        />
      )}
    </View>
  );
};
export default HomeScreen;

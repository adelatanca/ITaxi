import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Appearance,
  Button,
  useColorScheme,
  Modal,
  Image
} from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getCar } from '../../graphql/queries';
import { listOrders, listUsers } from '../../graphql/queries';
import { updateCar, updateOrder } from '../../graphql/mutations';
import mapDarkStyle from '../../assets/data/mapDarkStyle';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';
const GOOGLE_MAPS_APIKEY = 'test';

const HomeScreen = () => {
  const [reviewUser, setReviewUser] = useState(null);
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [newOrders, setNewOrders] = useState([]);
  const mapRef = useRef(null);
  const [region, setRegion] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [userOrder, setUserOrder] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [usernameOrdered, setUsernameOrdered] = useState(null);
  const [hasStop, setStop] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(null);
  const [hours, setHours] = useState(null);

  const currentLocation = {
    latitude: myPosition?.latitude,
    longitude: myPosition?.longitude,
    latitudeDelta: 0.035,
    longitudeDelta: 0.035,
  };

  const navigation = useNavigation();

  let colorScheme = useColorScheme();

  const fetchCurrentUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setCurrentUser(userData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await API.graphql(graphqlOperation(listUsers));
      setUser(user.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCar = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();

      const carData = await API.graphql(
        graphqlOperation(getCar, { id: userData.attributes.sub }),
      );
      setCar(carData.data.getCar);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchCurrentUser();
    fetchCar();
  }, []);

  const fetchOrders = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const carData = await API.graphql(
        graphqlOperation(getCar, { id: userData.attributes.sub }),
      );
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, { filter: { status: { eq: 'Noua' }, type: { eq: carData.data.getCar.type } } }),
      );
      setNewOrders(ordersData.data.listOrders.items);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    fetchOrders();
    const fetching = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const carData = await API.graphql(
          graphqlOperation(getCar, { id: userData.attributes.sub }),
        );
        // console.log("ACTIVE - ", carData.data.getCar.isActive)
        setIsActive(carData.data.getCar.isActive);
      } catch (e) {
        //console.log(e);
      }
    }
    const interval = setInterval(() => {
      if (fetching())
        fetchOrders()
    }, 10000)
    return () => clearInterval(interval)
  }, []);

  const originLocation = {
    latitude: order?.originLatitude,
    longitude: order?.originLongitude,
  };

  const destinationLocation = {
    latitude: order?.destLatitude,
    longitude: order?.destLongitude,
  };

  const wayPoint = [
    {
      latitude: order?.originLatitude,
      longitude: order?.originLongitude
    },
    {
      latitude: order?.stopLatitude,
      longitude: order?.stopLongitude
    },
  ];

  const wayPointOrigin = [
    {
      latitude:
        order?.originLatitude,
      longitude:
        order?.originLongitude,
    },
  ]

  const stopLocation = {
    latitude: order
      ? order?.stopLatitude
      : order?.destLatitude,
    longitude: order
      ? order?.stopLongitude
      : order?.destLongitude,
  };

  useEffect(() => {
    user.map(userData => {
      if (userData.id == newOrders[0]?.userId) {
        setUserOrder(userData.username);
      }
      if (userData.id === currentUser.attributes.sub) {
        //  console.log(userData.reviewAmount / userData.reviewNumbers);
        setReviewUser((userData.reviewAmount / userData.reviewNumbers));
        setProfileImage(userData.profilePicture)
      }
    });
  });


  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  };

  const onAccept = async newOrder => {
    try {
      const input = {
        id: newOrder.id,
        status: 'Preluare client',
        carId: car.id,
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, { input }),
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
        graphqlOperation(updateCar, { input }),
      );
      setCar(updatedCar.data.updateCar);
    } catch (e) {
      console.log(e);
    }
  };

  const onUserLocationChange = async event => {
    setMyPosition(event.nativeEvent.coordinate);

    const { latitude, longitude, heading } = event.nativeEvent.coordinate;

    try {
      const userData = await Auth.currentAuthenticatedUser();

      const input = {
        id: userData.attributes.sub,
        latitude,
        longitude,
        heading,
      };

      const updatedCar = await API.graphql(
        graphqlOperation(updateCar, { input }),
      );
      setCar(updatedCar.data.updateCar);
    } catch (e) {
      console.log(e);
    }
  };

  const goToCurrentLocation = () => {
    mapRef.current.animateToRegion(currentLocation, 3 * 1000);
  };

  const onDirectionFound = event => {
    // console.log(' order is ', order);
    // console.log('event is ', event.distance);
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

  const goToHistory = () => {
    navigation.navigate('Istoric comenzi');
  };

  useEffect(() => {
    if (order?.destLatitude != order?.stopLatitude) {
      setStop(true)
    }
    user.map(userData => {
      if (userData.id == order?.userId) {
        setUsernameOrdered(userData.username);
      }
    });

    if (order?.duration) {
      var num = order?.duration;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      setHours(rhours);
      setMinutes(rminutes);
    }
  });

  const getImage = (type) => {
    if (type === "ITaxiX") {
      return require(`../../assets/images/UberX.png`);
    }
    if (type === "Confort") {
      return require(`../../assets/images/Mercedes.png`);
    }
    if (type === "ITaxiXL") {
      return require(`../../assets/images/UberXL.png`);
    }
  };


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
                <Text style={styles.modalText}>Profilul tău</Text>
                {/* <UserAvatar size={85} name={currentUser.username} /> */}
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 3,
                      height: 2,
                    },
                    shadowOpacity: 5.25,
                    shadowRadius: 4,
                  }}
                  source={{ uri: profileImage }}
                />

                <Entypo
                  name={'edit'}
                  size={35}
                  color={'white'}
                  style={styles.editProfileImage}
                />
                <Text style={styles.rating}>
                  <StarRating
                    style={styles.rating}
                    halfStarEnabled={true}
                    maxStars={5}
                    rating={reviewUser}
                    // starStyle={{fontSize: 15}}
                    fullStarColor={'orange'}
                  />
                </Text>
                <Text style={styles.username}>{currentUser?.username}</Text>
                <Text style={styles.email}>{currentUser?.attributes.email}</Text>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                    resizeMode: "contain",
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 5.25,
                    shadowRadius: 4,
                  }}
                  source={getImage(car?.type)}
                />
                <Text style={styles.car}>{car?.carNumber}</Text>
                <Text style={styles.car}>{car?.type}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.close}>Închide</Text>
                </Pressable>
              </View>

            </View>
          </Modal>
        </View>
      );
    }
  };

  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'red',
              justifyContent: 'center',
              width: 200,
              padding: 10,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Complete {order?.type}</Text>
          </View>
          <Text style={styles.bottomText}> {order?.username}</Text>
        </View>
      );
    }
    if (order && order.pickedUp && hours != 0) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text> {hours}h {minutes} min</Text>
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
            <Text> {order?.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>{usernameOrdered} coboară</Text>
        </View>
      );
    }

    if (order && hours != 0) {
      // console.log(order);
      // console.log('is ordeer');
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text> {hours}h {minutes} min</Text>
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
            <Text> {order?.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Preluare {usernameOrdered}</Text>
        </View>
      );
    }

    if (order && order.pickedUp && hours == 0) {
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text> {minutes} min</Text>
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
            <Text> {order?.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>{usernameOrdered} coboară</Text>
        </View>
      );
    }

    if (order && hours == 0) {
      // console.log(order);
      // console.log('is ordeer');
      return (
        <View style={{ alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text> {minutes} min</Text>
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
            <Text> {order?.distance ? order.distance.toFixed(2) : '?'} km</Text>
          </View>
          <Text style={styles.bottomText}>Preluare {usernameOrdered}</Text>
        </View>
      );
    }


    if (car?.isActive) {
      return <Text style={styles.bottomText}>Disponibil</Text>;
    } else {
      return <Text style={styles.bottomText}>Indisponibil</Text>;
    }
  };

  if (hasStop === true) {
    return (
      <View>
        <MapView
          ref={mapRef}
          style={{ height: Dimensions.get('window').height - 190, width: '100%' }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          customMapStyle={colorScheme == 'light' ? [] : mapDarkStyle}
          onUserLocationChange={onUserLocationChange}
          initialRegion={{
            latitude: 47.0411391,
            longitude: 21.9259096,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          onRegionChangeComplete={region => setRegion(region)}>
          {order && (
            <MapViewDirections
              origin={{
                latitude: car?.latitude,
                longitude: car?.longitude,
              }}
              waypoints={wayPoint}
              destination={destinationLocation}
              optimizeWaypoints={true}
              onReady={onDirectionFound}
              onError={errorMessage => {
                console.log(errorMessage);
              }}
              lineDashPattern={[0]}
              //  destination={getDestination()}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeColor="#45a8f2"
              strokeWidth={5}
            />
          )}
          {originLocation?.latitude !== undefined ? (<Marker coordinate={originLocation} title={'Origine'} />) : (<Marker coordinate={{ latitude: 0, longitude: 0 }} title={'Origin'} />)}
          {stopLocation?.latitude !== undefined ? (<Marker coordinate={stopLocation} title={'Oprire'} />) : (<Marker coordinate={{ latitude: 0, longitude: 0 }} title={'Stop'} />)}
          {destinationLocation?.latitude !== undefined ? (<Marker coordinate={destinationLocation} title={'Destinatie'} />) : (<Marker coordinate={{ latitude: 0, longitude: 0 }} title={'Destinatie'} />)}
        </MapView>
        <Pressable
          onPress={() => console.warn('Balance')}
          style={styles.balanceButton}>
          <Text style={styles.balanceText}>
            {order?.pret}
            <Text style={{ color: 'green' }}> LEI </Text>
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.hamburgerButton}>
          <Entypo name={'menu'} size={35} color={'#45a8f2'} />
        </Pressable>
        <Pressable onPress={() => goToHistory()} style={styles.historyButton}>
          <Entypo name={'stopwatch'} size={35} color={'#45a8f2'} />
        </Pressable>
        <Pressable onPress={onGoPress} style={styles.goButton}>
          <Text style={styles.goText}>{car?.isActive ? 'STOP' : 'START'}</Text>
        </Pressable>
        <View style={styles.bottomContainer}>
          <Pressable onPress={() => Auth.signOut()}>
            <Entypo name={'log-out'} size={35} color={'#45a8f2'} />
          </Pressable>
          {renderBottomTitle()}
          <Pressable onPress={() => goToCurrentLocation()}>
            <Entypo name={'direction'} size={35} color={'#45a8f2'} />
          </Pressable>
        </View>
        {newOrders?.length > 0 && !order && isActive === true && (
          <NewOrderPopup
            client={userOrder}
            newOrder={newOrders[0]}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrders[0])}
          />
        )}
        {renderModalData()}
      </View>
    );
  }
  else {
    return (
      <View>
        <MapView
          ref={mapRef}
          style={{ height: Dimensions.get('window').height - 190, width: '100%' }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          customMapStyle={colorScheme == 'light' ? [] : mapDarkStyle}
          onUserLocationChange={onUserLocationChange}
          initialRegion={{
            latitude: 47.0411391,
            longitude: 21.9259096,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          onRegionChangeComplete={region => setRegion(region)}>
          {order && (
            <MapViewDirections
              origin={{
                latitude: car?.latitude,
                longitude: car?.longitude,
              }}
              waypoints={wayPointOrigin}
              destination={destinationLocation}
              optimizeWaypoints={true}
              onReady={onDirectionFound}
              onError={errorMessage => {
                console.log(errorMessage);
              }}
              lineDashPattern={[0]}
              //  destination={getDestination()}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeColor="#45a8f2"
              strokeWidth={5}
            />
          )}

          {originLocation?.latitude !== undefined ? (<Marker coordinate={originLocation} title={'Origine'} />) : (<Marker coordinate={{ latitude: 0, longitude: 0 }} title={'Origin'} />)}
          {destinationLocation?.latitude !== undefined ? (<Marker coordinate={destinationLocation} title={'Destinatie'} />) : (<Marker coordinate={{ latitude: 0, longitude: 0 }} title={'Destinatie'} />)}
        </MapView>
        <Pressable
          onPress={() => console.warn('Balance')}
          style={styles.balanceButton}>
          <Text style={styles.balanceText}>
            {order?.pret}
            <Text style={{ color: 'green' }}> LEI </Text>
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.hamburgerButton}>
          <Entypo name={'menu'} size={35} color={'#45a8f2'} />
        </Pressable>
        <Pressable onPress={() => goToHistory()} style={styles.historyButton}>
          <Entypo name={'stopwatch'} size={35} color={'#45a8f2'} />
        </Pressable>
        <Pressable onPress={onGoPress} style={styles.goButton}>
          <Text style={styles.goText}>{car?.isActive ? 'STOP' : 'START'}</Text>
        </Pressable>
        <View style={styles.bottomContainer}>
          <Pressable onPress={() => Auth.signOut()}>
            <Entypo name={'log-out'} size={35} color={'#45a8f2'} />
          </Pressable>
          {renderBottomTitle()}
          <Pressable onPress={() => goToCurrentLocation()}>
            <Entypo name={'direction'} size={35} color={'#45a8f2'} />
          </Pressable>
        </View>
        {newOrders?.length > 0 && !order && isActive === true && (
          <NewOrderPopup
            client={userOrder}
            newOrder={newOrders[0]}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrders[0])}
          />
        )}
        {renderModalData()}
      </View>
    );
  }
};
export default HomeScreen;

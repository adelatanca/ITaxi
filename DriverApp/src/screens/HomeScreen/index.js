import React, {useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk';

const originLocation = {
  latitude: 37.3318456,
  longitude: -122.0296002,
};

const destinationLocation = {
  latitude: 37.771707,
  longitude: -122.4053769,
};

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);

  const onGoPress = () => {
    setIsOnline(!isOnline);
  };
  return (
    <View>
      <MapView
        style={{height: Dimensions.get('window').height - 150, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={originLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="black"
          strokeWidth={5}
        />
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
        <Text style={styles.goText}>{isOnline ? 'END' : 'GO'}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={35} color={'grey'} />

        {isOnline ? (
          <Text style={styles.bottomText}> You're online</Text>
        ) : (
          <Text style={styles.bottomText}> You're offline</Text>
        )}

        <Entypo name={'menu'} size={35} color={'grey'} />
      </View>

      <NewOrderPopup />
    </View>
  );
};
export default HomeScreen;

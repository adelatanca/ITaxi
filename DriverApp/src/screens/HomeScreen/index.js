import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeScreen = () => {
  return (
    <View style={{width: 100, height: 100}}>
      <Text> Good </Text>
      <MapView
        style={{height: 350, width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 47.046501,
          longitude: 21.918943,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};
export default HomeScreen;

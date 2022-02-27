import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles.js';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk';

const NewOrderPopup = ({ newOrder, onAccept, onDecline, client }) => {
  const [pornire, setPornire] = useState(null);
  const [destinatie, setDestinatie] = useState(null);
  const [oprire, setOprire] = useState(null);
  const [isStop, setIsStop] = useState(null);

  const getOriginAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      newOrder?.originLatitude +
      ',' +
      newOrder?.originLongitude +
      '&key=' +
      GOOGLE_MAPS_APIKEY,
    )
      .then(response => response.json())
      .then(responseJson => {
        const responseAdd = responseJson.results.map(
          address => address.formatted_address,
        );
        console.log('FORMATAT origin ' + JSON.stringify(responseAdd[3]));
        setPornire(responseAdd[3]);
        //  console.log('FORMATAT ' + JSON.stringify(responseJson.results));
      });
  };

  const getDestinationAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      newOrder?.destLatitude +
      ',' +
      newOrder?.destLongitude +
      '&key=' +
      GOOGLE_MAPS_APIKEY,
    )
      .then(response => response.json())
      .then(responseJson => {
        const responseAdd = responseJson.results.map(
          address => address.formatted_address,
        );
        console.log('FORMATAT ' + JSON.stringify(responseAdd[3]));
        setDestinatie(responseAdd[3]);
        //  console.log('FORMATAT ' + JSON.stringify(responseJson.results));
      });
  };
  const getStopAddress = () => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      newOrder?.stopLatitude +
      ',' +
      newOrder?.stopLongitude +
      '&key=' +
      GOOGLE_MAPS_APIKEY,
    )
      .then(response => response.json())
      .then(responseJson => {
        const responseAdd = responseJson.results.map(
          address => address.formatted_address,
        );
        console.log('FORMATAT ' + JSON.stringify(responseAdd[3]));
        setOprire(responseAdd[3]);
        //  console.log('FORMATAT ' + JSON.stringify(responseJson.results));
      });
  };

  useEffect(() => {
    getOriginAddress();
    getDestinationAddress();
    if (newOrder?.stopLatitude != newOrder?.destLatitude) {
      getStopAddress();
      setIsStop(true);
    }
  });

  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Refuza </Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <View style={styles.userBg}>
            <Entypo name={'user'} size={30} color={'white'} />
          </View>
          <Text style={styles.username}>{client}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.line}>
            <Entypo name={'phone'} size={18} color={'white'} />
            <Text style={styles.phone} numberOfLines={1} ellipsizeMode='tail'>  035353443</Text>
          </View>
          <View style={styles.line}>
            <Entypo name={'location-pin'} size={20} color={'white'} />
            <Text style={styles.pornire} numberOfLines={1} ellipsizeMode='tail'> {pornire}</Text>
          </View>
          {isStop ? <View style={styles.line}><Entypo name={'time-slot'} size={18} color={'white'} /><Text style={styles.oprire} numberOfLines={1} ellipsizeMode='tail'> {oprire}</Text></View> : null}
          <View style={styles.line}>
            <Entypo name={'location'} size={18} color={'white'} />
            <Text style={styles.destinatie} numberOfLines={1} ellipsizeMode='tail'> {destinatie}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;

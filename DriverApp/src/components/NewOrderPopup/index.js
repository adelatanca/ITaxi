import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import styles from './styles.js';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCHPuKJ6RU3VXX2JIpfwwzSP_yLuAco4vk';

const NewOrderPopup = ({newOrder, onAccept, onDecline, client}) => {
  const [pornire, setPornire] = useState(null);
  const [destinatie, setDestinatie] = useState(null);

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

  useEffect(() => {
    getOriginAddress();
    getDestinationAddress();
  }, []);

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
        <Text style={{color: 'white', fontSize: 20}}>Telefon - 035353443</Text>

        <Text style={styles.pornire}> Pornire - {pornire}</Text>
        <Text style={styles.destinatie}>Destinatie - {destinatie}</Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;

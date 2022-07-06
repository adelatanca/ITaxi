import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles.js';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA35VCq4KZN3CRPY-Q23ALhxLjiO4S7mZw';

const NewOrderPopup = ({ newOrder, onAccept, onDecline, client }) => {
  const [pornire, setPornire] = useState(null);
  const [destinatie, setDestinatie] = useState(null);
  const [oprire, setOprire] = useState(null);
  const [isStop, setIsStop] = useState(null);

  useEffect(() => {
    if (newOrder?.stopLatitude != newOrder?.destLatitude) {
      const interval = setInterval(() => {
        setIsStop(true);
      }, 100);
      return () => clearInterval(interval);
    }
  });
  if (isStop != null) {
    return (
      <View style={styles.root}>
        <Pressable onPress={onDecline} style={styles.declineButton}>
          <Text style={styles.declineText}>Refuză </Text>
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
              <Text style={styles.pornire} numberOfLines={1} ellipsizeMode='tail'> {newOrder.originName}</Text>
            </View>
            <View style={styles.line}><Entypo name={'time-slot'} size={18} color={'white'} /><Text style={styles.oprire} numberOfLines={1} ellipsizeMode='tail'> {newOrder.stopName}</Text></View>
            <View style={styles.line}>
              <Entypo name={'location'} size={18} color={'white'} />
              <Text style={styles.destinatie} numberOfLines={1} ellipsizeMode='tail'> {newOrder.destinationName}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
  else if (isStop == null) {
    return (
      <View style={styles.root}>
        <Pressable onPress={onDecline} style={styles.declineButton}>
          <Text style={styles.declineText}>Refuză </Text>
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
              <Text style={styles.pornire} numberOfLines={1} ellipsizeMode='tail'> {newOrder.originName}</Text>
            </View>
            <View style={styles.line}>
              <Entypo name={'location'} size={18} color={'white'} />
              <Text style={styles.destinatie} numberOfLines={1} ellipsizeMode='tail'> {newOrder.destinationName}</Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
};

export default NewOrderPopup;

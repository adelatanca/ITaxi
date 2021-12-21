import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import styles from './styles.js';

const NewOrderPopup = () => {
  const onDecline = () => {
    console.warn('declined');
  };
  const onAccept = () => {
    console.warn('accept');
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline </Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.uberType}> UberX </Text>

          <View style={styles.userBg}>
            <Entypo name={'user'} size={35} color={'white'} />
          </View>

          <Text style={styles.uberType}>
            <Entypo name={'star'} size={20} />5
          </Text>
        </View>

        <Text style={styles.minutes}> 2 min </Text>
        <Text style={styles.distance}>0.2 mi </Text>
      </Pressable>
    </View>
  );
};

export default NewOrderPopup;

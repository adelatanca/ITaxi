import React, { useState, useEffect } from "react";
import StarRating from "react-native-star-rating";

import { View, StyleSheet, Text } from "react-native";

const RatingScreen = () => {
  const [rating, setRating] = useState(2.5);

  const onStarRatingPress = (rating) => {
    setRating(rating);
  };

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <Text style={styles.container}>
      <StarRating
        style={styles.textStyle}
        halfStarEnabled={true}
        maxStars={5}
        rating={rating}
        fullStarColor={"gold"}
        selectedStar={(rating) => onStarRatingPress(rating)}
      />
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 20,
  },
});

export default RatingScreen;

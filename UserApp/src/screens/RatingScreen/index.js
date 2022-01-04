// import React, { useState } from "react";

// import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

// const RatingScreen = () => {
//   const [defaultRating, setDefaultRating] = useState(2);
//   const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

//   const starImgFilled =
//     "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
//   const starImgCorner =
//     "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";

//   const CustomRatingBar = () => {
//     return (
//       <View style={styles.customRatingBar}>
//         {maxRating.map((item, key) => {
//           return (
//             <TouchableOpacity
//               activeOpacity={0.7}
//               key={item}
//               onPress={() => setDefaultRating(item)}
//             >
//               <Image
//                 style={styles.starImgStyle}
//                 source={
//                   item <= defaultRating
//                     ? { uri: starImgFilled }
//                     : { uri: starImgCorner }
//                 }
//               />
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text style={styles.textStyle}>Rate driver </Text>
//       <CustomRatingBar />
//       <Text style={styles.textStyle}>
//         {defaultRating + "/" + maxRating.length}
//       </Text>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonStyle}
//         onPress={() => alert(defaultRating)}
//       >
//         <Text> Get Selected Rating </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 10,
//     justifyContent: "center",
//   },
//   textStyle: {
//     textAlign: "center",
//     fontSize: 23,
//     marginTop: 20,
//   },
//   customRatingBar: {
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   starImgStyle: {
//     width: 40,
//     height: 40,
//     resizeMode: "cover",
//   },
//   buttonStyle: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 30,
//     padding: 15,
//     margin: 10,
//     backgroundColor: "pink",
//   },
// });

// export default RatingScreen;

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

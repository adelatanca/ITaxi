import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
<<<<<<< HEAD
=======
import AntDesign from "react-native-vector-icons/AntDesign";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
import styles from "./styles";
const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {(() => {
<<<<<<< HEAD
          if (data.description == "Acasa") {
            return <Entypo name="home" size={20} color={"yellow"} />;
          } else if (data.description == "Job")
            return <Entypo name="laptop" size={20} color={"#f321ff"} />;
          else return <Entypo name="location" size={20} color={"white"} />;
        })()}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}{" "}
=======
          if (data.description == "Acasă") {
            return (
              <View
                style={[styles.iconContainer]}
              >
                <Entypo style={styles.icon} name="home" size={25} color={"white"} />
              </View>
            );
          } else if (data.description == "Job")
            return (
              <View style={[styles.iconContainer]}>
                <AntDesign style={styles.icon} name="laptop" size={25} color={"white"} />
              </View>
            );
          else
            return (
              <View
                style={[styles.iconContainer]}
              >
                <Entypo style={styles.icon} name="location-pin" size={25} color={"white"} />
              </View>
            );
        })()}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      </Text>
    </View>
  );
};

export default PlaceRow;

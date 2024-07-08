<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import ITaxiTypeRow from "..//ITaxiTypeRow";
import typesData from "../../assets/data/types";

<<<<<<< HEAD
const ITaxiTypes = ({ typeState, onSubmit }) => {
  // console.log("Type state " + props.typeState);
  const [selectedType, setSelectedType] = typeState;
  //    isSelected={type.type === selectedType}
  //         onPress={() => setSelectedType(type.type)}

  const confirm = () => {
    console.warn("confirm");
  };

  return (
    <View>
=======
const ITaxiTypes = ({
  typeState,
  onSubmit,
  hours,
  minutes,
  km,
  priceState,
  hasPromotion
}) => {
  const [selectedType, setSelectedType] = typeState;

  const [selectedPrice, setSelectedPrice] = priceState;

  if (km == null) {
    // console.log("props null");
  }
  else {
    var hoursProps = hours;
    var minutesProps = minutes;
    var kmProps = km.toString().substr(0, 4);
    var price = (km * 3.49).toString().substr(0, 5);

    if (typeState[0] == "Confort") {
      price = (km * 4.59).toString().substr(0, 5);
    }
    if (typeState[0] == "ITaxiXL") {
      price = (km * 2.79).toString().substr(0, 5);
    }

    var pricePromo = (((km * 3.49).toString().substr(0, 5)) - ((km * 3.49).toString().substr(0, 5)) * 0.3).toString().substr(0, 5);

    if (typeState[0] == "Confort") {
      pricePromo = (((km * 4.59).toString().substr(0, 5)) - ((km * 4.59).toString().substr(0, 5)) * 0.3).toString().substr(0, 5);
    }
    if (typeState[0] == "ITaxiXL") {
      pricePromo = (((km * 2.79).toString().substr(0, 5)) - ((km * 2.79).toString().substr(0, 5)) * 0.3).toString().substr(0, 5);
    }
  }


  return (
    <View style={styles.container}>
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      {typesData.map((type, i) => (
        <ITaxiTypeRow
          type={type}
          key={type.id}
<<<<<<< HEAD
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
=======
          hours={hours}
          minutes={minutes}
          km={km}
          hasPromotion={hasPromotion}
          isSelected={type.type === selectedType}
          onPress={() => {
            setSelectedType(type.type);
            if (!hasPromotion) {
              setSelectedPrice(price);
            }
            if (hasPromotion) {
              setSelectedPrice(pricePromo);
            }
          }}
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        />
      ))}

      <Pressable
        onPress={onSubmit}
        style={{
<<<<<<< HEAD
          backgroundColor: "black",
          padding: 10,
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Confirm ITaxi
=======
          backgroundColor: "#45a8f2",
          padding: 10,
          margin: 10,
          borderRadius: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.45,
          shadowRadius: 3.84,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Confirmă ITaxi
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
        </Text>
      </Pressable>
    </View>
  );
};

export default ITaxiTypes;

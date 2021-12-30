import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import ITaxiTypeRow from "..//ITaxiTypeRow";
import typesData from "../../assets/data/types";

const ITaxiTypes = ({ typeState, onSubmit, hours, minutes, km }) => {
  // console.log("Type state " + props.typeState);
  const [selectedType, setSelectedType] = typeState;

  const confirm = () => {
    console.warn("confirm");
  };
  console.log("hours from taxi types", hours);

  console.log("minutes from taxi types", minutes);

  return (
    <View>
      {typesData.map((type, i) => (
        <ITaxiTypeRow
          type={type}
          key={type.id}
          hours={hours}
          minutes={minutes}
          km={km}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: "black",
          padding: 10,
          margin: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Confirm ITaxi
        </Text>
      </Pressable>
    </View>
  );
};

export default ITaxiTypes;

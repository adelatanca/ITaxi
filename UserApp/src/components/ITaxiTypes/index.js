import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import ITaxiTypeRow from "..//ITaxiTypeRow";
import typesData from "../../assets/data/types";

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
      {typesData.map((type, i) => (
        <ITaxiTypeRow
          type={type}
          key={type.id}
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

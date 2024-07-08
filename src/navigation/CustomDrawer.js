import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#cacaca",
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text style={{ color: "white", fontSize: 24 }}> Adela Tanca </Text>
            <Text style={{ color: "lightgrey", fontSize: 24 }}> 5.00 * </Text>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#919191",
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            paddingVertical: 5,
            marginVertical: 15,
          }}
        >
          <Pressable
            onPress={() => {
              console.log("Messages");
            }}
          >
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => {
            console.log("Do more with your account");
          }}
        >
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("make money driving");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make mobney driving{" "}
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

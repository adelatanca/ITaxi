<<<<<<< HEAD
import React from "react";
import { View, Text, Pressable } from "react-native";
=======
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Switch } from "react-native";
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
<<<<<<< HEAD

import { Auth } from "aws-amplify";

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
            Make money driving{" "}
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />

      <Pressable
        onPress={() => {
          Auth.signOut();
        }}
      >
        <Text
          style={{
            color: "black",
            padding: 5,
            paddingLeft: 20,
            marginTop: 20,
          }}
        >
          Logout
        </Text>
      </Pressable>
    </DrawerContentScrollView>
  );
=======
import UserAvatar from "react-native-user-avatar";

import AntDesign from "react-native-vector-icons/AntDesign";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

const CustomDrawer = (props) => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      //console.log("USER DATA LOGGED ", userData)
      setUser(userData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return <Text>Please Wait</Text>;
  } else {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: "#45a8f2", padding: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View />
            <UserAvatar
              size={50}
              name={user.username}
              style={{ marginRight: 5 }}
            />
            <AntDesign
              name={"form"}
              size={23}
              color={"white"}
              style={{ right: 25, top: 16 }}
            />
            <View>
              <Text style={{ color: "white", fontSize: 24, right: 10 }}>
                {user?.username}
              </Text>
              <Text style={{ color: "white", fontSize: 14, right: 10 }}>
                {user.attributes?.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "white",
              paddingVertical: 5,
              marginVertical: 15,
            }}
          >
            <Pressable
              onPress={() => {
                console.log("Do more with your account");
              }}
            >
              <Text
                style={{
                  color: "white",
                  paddingVertical: 5,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 10,
                }}
              >
                Devino șofer partener
              </Text>
              <Text
                style={{
                  color: "white",
                  paddingVertical: 5,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Câștigă bani după propriul program
              </Text>
            </Pressable>
          </View>
        </View>

        <DrawerItemList {...props} />

        <Pressable
          onPress={() => {
            Auth.signOut();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "grey",
              padding: 5,
              paddingLeft: 20,
              marginTop: 450,
            }}
          >
            <AntDesign name={"logout"} size={20} color={"gray"} /> Logout
          </Text>
        </Pressable>
      </DrawerContentScrollView>
    );
  }
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
};

export default CustomDrawer;

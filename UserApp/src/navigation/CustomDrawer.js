import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Switch } from "react-native";
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import UserAvatar from "react-native-user-avatar";

import AntDesign from "react-native-vector-icons/AntDesign";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../graphql/queries";

const CustomDrawer = (props) => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const user = await API.graphql(graphqlOperation(listUsers));
      setUser(user.data.listUsers.items);
      // console.log(user.data.listUsers.items, "the user");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // console.log(user[0], "is user");

  if (!user[0]) {
    return <Text>Please Wait</Text>;
  } else {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: "#45a8f2", padding: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View />
            <UserAvatar
              size={50}
              name={user[0].username}
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
                {user[0].username}
              </Text>
              <Text style={{ color: "white", fontSize: 14, right: 10 }}>
                {user[0].email}
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
                style={{ color: "white", paddingVertical: 5, fontSize: 15 }}
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
              marginTop: 320,
            }}
          >
            <AntDesign name={"logout"} size={20} color={"gray"} /> Logout
          </Text>
        </Pressable>
      </DrawerContentScrollView>
    );
  }
};

export default CustomDrawer;

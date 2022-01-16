import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  return (
    <Pressable style={[styles.container, { width: width - 60 }]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.image,
          }}
        />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.bedrooms}>{props.title}</Text>

          <Text style={styles.description} numberOfLines={3}>
            {props.content}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>{props.subtitle}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;

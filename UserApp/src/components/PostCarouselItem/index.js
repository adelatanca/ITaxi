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
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    // navigation.navigate("Post", { postId: post.id });
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, { width: width - 60 }]}
    >
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require(`../../assets/images/ITaxi_App.png`)}
          //   source={{
          //     uri: "https://chargedevs.com/wp-content/uploads/2015/11/Nissan-LEAF-electric-taxis.jpg",
          //   }}
        />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.bedrooms}>50% reducere</Text>

          <Text style={styles.description} numberOfLines={3}>
            Invita-ti prietenii prin aplicatie si primesti o reducere la
            urmatoarele 5 calatorii.
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>50% </Text>pe calatorie
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;

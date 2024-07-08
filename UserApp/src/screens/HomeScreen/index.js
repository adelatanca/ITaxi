import React, { useEffect } from "react";
<<<<<<< HEAD
import { View, Text, Dimensions } from "react-native";
import styles from "./styles";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import CovidMessage from "../../components/CovidMessage";
import ITaxiTypes from "../../components/ITaxiTypes";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
  }, []);
  return (
    <View style={{ height: Dimensions.get("window").height - 400 }}>
      <HomeMap />
      <CovidMessage />
=======
import {
  View,
  Text,
  Dimensions,
  FlatList,
  useWindowDimensions,
} from "react-native";
import styles from "./styles";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import PostCarouselItem from "../../components/PostCarouselItem";

const HomeScreen = () => {

  const width = useWindowDimensions().width;
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Aplicația ITaxi - reducere",
      image: "file:///Users/Adela/Desktop/ITaxi_App.png",
      content:
        "Invită-ți prietenii prin aplicație și primești o reducere la următoarele 5 călătorii.",
      subtitle: "50% pentru fiecare călătorie",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cursă electrică cu ITaxi",
      image:
        "https://chargedevs.com/wp-content/uploads/2015/11/Nissan-LEAF-electric-taxis.jpg",
      content:
        "ITaxi, prima companie de transport care utilizează doar mașini electrice.",
      subtitle: "Participă și tu inițiativei!",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Turul orașului",
      image:
        "https://media.istockphoto.com/photos/oradea-city-romania-picture-id811465414?k=20&m=811465414&s=612x612&w=0&h=R6zFxtMcng9IzuZacXhQRvhuY9pVch9gdElNbiKYtL8=",
      content:
        "Pentru turiști, ITaxi oferă un tur al orașului pentru doar 49.99 lei, doar descărcând aplicația.",
      subtitle: "Profită acum!",
    },
  ];

  const renderItem = ({ item }) => (
    <PostCarouselItem
      image={item.image}
      title={item.title}
      content={item.content}
      subtitle={item.subtitle}
    />
  );

  return (
    <View style={{ height: Dimensions.get("window").height - 400 }}>
      <HomeMap />
      <View>
        <FlatList
          horizontal
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelarationRate={"normal"}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
>>>>>>> f309f4de629da70f6abc7c22d1846646794ed3ee
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

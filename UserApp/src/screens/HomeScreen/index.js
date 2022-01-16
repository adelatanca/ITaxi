import React, { useEffect } from "react";
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
import CovidMessage from "../../components/CovidMessage";
import PostCarouselItem from "../../components/PostCarouselItem";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
  }, []);

  const width = useWindowDimensions().width;
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Aplicatia ITaxi - reducere",
      image: "https://fv9-2.failiem.lv/thumb_show.php?i=kwxukp8r4&view",
      content:
        "Invita-ti prietenii prin aplicatie si primesti o reducere la urmatoarele 5 calatorii.",
      subtitle: "50% pentru fiecare calatorie",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Cursa electrica cu ITaxi",
      image:
        "https://chargedevs.com/wp-content/uploads/2015/11/Nissan-LEAF-electric-taxis.jpg",
      content:
        "ITaxi, prima companie de transport care utilizeaza doar masini electrice.",
      subtitle: "Participa si tu initiativei!",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Turul orasului",
      image:
        "https://media.istockphoto.com/photos/oradea-city-romania-picture-id811465414?k=20&m=811465414&s=612x612&w=0&h=R6zFxtMcng9IzuZacXhQRvhuY9pVch9gdElNbiKYtL8=",
      content:
        "Pentru turisti, ITaxi ofera un tur al orasului pentru doar 49.99 lei, doar descarcand aplicatia.",
      subtitle: "Profita acum!",
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
      {/* <CovidMessage /> */}
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
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

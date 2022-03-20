import React, { useState } from "react";
import {
  Image,
  Appearance,
  useColorScheme,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import styles from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const PromotiiScreen = (props) => {
  let colorScheme = useColorScheme();
  const navigation = useNavigation();
  const route = useRoute();
  const [hasPromotion, setHasPromotion] = useState(false);

  const { originPlace, destinationPlace, stopPlace, destinatie } = route.params;
  const goToSearchResult = () => {
    navigation.navigate("SearchResults", { originPlace, destinationPlace, stopPlace, destinatie, hasPromotion })
  }

  return (
    <View>
      <Text style={styles.title}>Introdu codul promoțional</Text>
      <TextInput style={styles.input} placeholder="Cod promoțional" onChangeText={promotion => setHasPromotion(true)}></TextInput>
      <Text style={styles.subtitle}>
        Introdu codul și reducerea va fi aplicată la următoarea cursă
      </Text>
      <Pressable onPress={() => goToSearchResult()} style={styles.aplica}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Aplică
        </Text>
      </Pressable>

      <View style={styles.curseGratuite}>
        <View style={{ top: 15, left: 7 }}>
          <Entypo name={"price-tag"} size={30} color={"white"} />
        </View>
        <Text
          style={{ fontWeight: "bold", fontSize: 17, left: 50, bottom: 20 }}
        >
          Nu ai un cod încă?
        </Text>
        <Text style={{ color: "gray", fontSize: 17, left: 50, bottom: 17 }}>
          Obține curse gratuite
        </Text>
      </View>
    </View>
  );
};

export default PromotiiScreen;

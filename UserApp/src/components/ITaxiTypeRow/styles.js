import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 35,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#45a8f2",
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  price: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
  },
  priceNoPromo: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 22,
    bottom: 20,
  },
  priceReduced: {
    fontSize: 12,
    left: 10,
    color: "red",
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  }
});

export default styles;

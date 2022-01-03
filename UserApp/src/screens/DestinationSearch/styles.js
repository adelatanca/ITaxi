import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    top: 50,
  },
  close: {
    fontSize: 10,
    marginHorizontal: 7,
    bottom: 30,
    fontWeight: "bold",
  },
  setDestination: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 100,
    bottom: 55,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    backgroundColor: "#4dcb4d94",
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 10,
  },
  separator: {
    backgroundColor: "#efefef",
    height: 1,
  },
  listView: {
    position: "absolute",
    top: 105,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: "#a2a2a2",
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: { marginLeft: 5 },

  circle: {
    width: 10,
    height: 10,
    backgroundColor: "#75eb75",
    position: "absolute",
    top: 15,
    left: 14,
    borderRadius: 5,
  },
  line: {
    width: 3,
    height: 50,
    backgroundColor: "#8b87938c",
    position: "absolute",
    top: 25,
    left: 17,
  },
  pin: {
    color: "#4d8beb",
    position: "absolute",
    top: 73,
    left: 8,
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 3,
    borderRadius: 25,
  },
});

export default styles;

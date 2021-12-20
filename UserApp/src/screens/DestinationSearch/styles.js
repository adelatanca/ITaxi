import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  textInput: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 5,
    marginLeft: 20,
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
  locationText: {},

  circle: {
    width: 7,
    height: 7,
    backgroundColor: "red",
    position: "absolute",
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 3,
    height: 50,
    backgroundColor: "#c4c4c4",
    position: "absolute",
    top: 28,
    left: 17,
  },
  square: {
    width: 7,
    height: 7,
    backgroundColor: "red",
    position: "absolute",
    top: 80,
    left: 15,
  },
});

export default styles;

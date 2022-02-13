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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  setDestination: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 100,
    bottom: 55,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  textInput: {
    padding: 10,
    backgroundColor: "#45a8f29e",
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
  listViewStop: {
    position: "absolute",
    top: 103,
  },
  listViewStopOrigin: {
    position: "absolute",
    top: 155,
  },
  autocompleteContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 35,
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
    backgroundColor: "#45a8f29e",
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  pin: {
    color: "#4d8beb",
    position: "absolute",
    top: 73,
    left: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 3,
    borderRadius: 25,
  },
  addStop: {
    position: "absolute",
    top: 67,
    left: 395,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  deleteStop: {
    position: "absolute",
    top: 120,
    left: 395,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  circleStop: {
    width: 10,
    height: 10,
    backgroundColor: "#4d8beb",
    position: "absolute",
    top: 75,
    left: 13,
    borderRadius: 5,
  },
  lineStop: {
    width: 3,
    height: 105,
    backgroundColor: "#8b87938c",
    position: "absolute",
    top: 25,
    left: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  pinStop: {
    color: "#4d8beb",
    position: "absolute",
    top: 125,
    left: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  searchOnMapPin: {
    fontSize: 20,
    right: 20,
    top: 22,
    fontWeight: "bold",
  },
  searchOnMap: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
  },
  searchOnMapView: {
    marginHorizontal: 140,
    top: 657,
  }
});

export default styles;

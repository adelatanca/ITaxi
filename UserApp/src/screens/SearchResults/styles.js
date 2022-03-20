import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  leftButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    color: "white",
    marginBottom: 3,
    left: 65,
    bottom: 20,
    marginLeft: 10,
    marginBottom: 5,
    width: 120,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  rightButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    color: "white",
    marginBottom: 3,
    bottom: 20,
    left: 90,
    marginLeft: 20,
    marginBottom: 5,
    width: 120,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  historyButton: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: 10,
    left: Dimensions.get('window').width - 80,
  },
});

export default styles;

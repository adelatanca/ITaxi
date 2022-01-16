import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "pink",
    padding: 10,
  },
  line: {
    flexDirection: "row",
    // borderTopWidth: 1,
    // borderTopColor: "#919191",
    borderBottomWidth: 1,
    borderBottomColor: "#919191",
    paddingVertical: 1,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 12,
    color: "#45a8f2",
    fontWeight: "bold",
  },
  comanda: {
    top: 10,
    fontSize: 17,
    marginBottom: 20,
    flexDirection: "row",
  },
  comandaData: {
    top: 10,
    fontSize: 17,
    marginBottom: 20,
    flexDirection: "row",
    color: "#919191",
    marginLeft: "auto",
  },
});

export default styles;

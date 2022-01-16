import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  icon: {
    right: 10,
  },
  bottomText: {
    fontSize: 15,
    fontWeight: "bold",
    top: 400,
    textAlign: "center",
  },
  rowView: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#919191",
    paddingVertical: 10,
    marginVertical: 15,
  },
  navigateNext: { marginLeft: "auto" },
});

export default styles;

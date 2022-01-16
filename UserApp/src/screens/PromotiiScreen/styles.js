import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1.3,
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
  },
  aplica: {
    backgroundColor: "#45a8f2",
    padding: 15,
    margin: 15,
    borderRadius: 20,
    alignItems: "center",
    top: 470,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  curseGratuite: {
    padding: 10,
    borderRadius: 17,
    marginLeft: 17,
    marginRight: 17,
    backgroundColor: "#83c2f159",
    top: 470,

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
  },
});

export default styles;

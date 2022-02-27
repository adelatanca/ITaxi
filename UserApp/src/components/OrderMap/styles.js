import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    roundButton: {
        position: "absolute",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        padding: 10,

    },
    row: {
        width: 45,
        padding: 10,
        backgroundColor: '#dbdbdb',
        borderRadius: 20
    },
    date: {
        color: "#5d5d5d",
        top: 25,
        left: 10
    },
    location: {

    },
    price: {
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: "flex-end",
        left: 260,
    }
});

export default styles;

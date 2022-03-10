import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        flex: 1,
        width: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.4,
    },
    row: {
        width: 45,
        padding: 10,
        backgroundColor: '#dbdbdb',
        borderRadius: 20
    },
    date: {
        color: "#5d5d5d",
        top: 20,
        right: 233
    },
    price: {
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: "flex-end",
        right: 70,
    },
    streets: {
        left: 8,
        fontSize: 16,
        bottom: 10,
        width: "100%"
    }
});

export default styles;

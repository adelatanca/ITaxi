import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        height: 100,
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 1.6,
            height: 0.4,
        },
        shadowOpacity: 1.15,
        shadowRadius: 1.4,
    },
    insideContainer: {
        borderRadius: 10,
        flexDirection: "column",
        padding: 10,
        height: 200,
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0.6,
            height: 0.4,
        },
        shadowOpacity: 1.15,
        shadowRadius: 1.4,
    },
    clientName: {
        fontWeight: "bold",
        fontSize: 18,
        top: 10,
        left: 180,
        width: "50%"
    },
    clientPhone: {
        fontSize: 16.5,
        top: 20,
        left: 180,
    },
    paymentMethod: {
        fontSize: 17,
        top: 43,
        left: 180,
    },
    plataTitle: {
        fontWeight: "bold",
        fontSize: 18,
        top: 40,
        left: 180,
    },
    price: {
        fontWeight: "bold",
        fontSize: 14,
        top: 46,
        left: 180,
    },
    date: {
        height: 20,
        fontSize: 13,
        color: "gray",
        textTransform: 'capitalize',
        bottom: 87,
        left: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    }
});

export default styles;

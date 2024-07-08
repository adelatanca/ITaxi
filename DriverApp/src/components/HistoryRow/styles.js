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
        shadowColor: "#4d8beb",
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
        shadowColor: "#4d8beb",
        shadowOffset: {
            width: 0.6,
            height: 0.4,
        },
        shadowOpacity: 1.5,
        shadowRadius: 1.4,
    },
    clientName: {
        fontWeight: "bold",
        fontSize: 16,
        top: 10,
        left: 200,
        width: "50%"
    },
    clientPhone: {
        fontSize: 16.5,
        top: 20,
        left: 200,
    },
    paymentMethod: {
        fontSize: 16,
        top: 43,
        left: 200,
    },
    plataTitle: {
        fontWeight: "bold",
        fontSize: 16,
        top: 40,
        left: 200,
    },
    price: {
        fontWeight: "bold",
        fontSize: 14,
        top: 46,
        left: 200,
    },
    date: {
        height: 20,
        fontSize: 13,
        color: "gray",
        textTransform: 'capitalize',
        bottom: 87,
        left: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: "#45a8f29e",
        position: "absolute",
        top: 45,
        left: 19,
        borderRadius: 5,
    },
    line: {
        width: 3,
        height: 50,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 53,
        left: 22,
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
        top: 100,
        left: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    originNameStreet: {
        left: 24,
        bottom: 83,
        fontSize: 14,
        width: "44%"
    },
    originHour: {
        left: 24,
        bottom: 80,
        fontSize: 12,
        color: "grey"
    },
    stopNameStreet: {
        left: 27,
        bottom: 37,
        fontSize: 14,
        width: "44%"
    },
    stopHour: {
        left: 27,
        bottom: 34,
        fontSize: 13,
        color: "grey"
    },
    destinationNameStreet: {
        left: 24,
        bottom: 59,
        fontSize: 14,
        width: "44%"
    },
    destinationHour: {
        left: 24,
        bottom: 55,
        fontSize: 12,
        color: "grey"
    },
    circleStop: {
        width: 10,
        height: 10,
        backgroundColor: "#4d8beb",
        position: "absolute",
        top: 100,
        left: 20,
        borderRadius: 5,
    },
    lineStop: {
        width: 3,
        height: 105,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 53,
        left: 23,
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
        top: 152,
        left: 14,
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

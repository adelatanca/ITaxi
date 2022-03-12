import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "white",
        height: "100%"
    },
    dots: {
        flexDirection: "row",
        left: 350,
    },
    backButton: {
        bottom: 20,
        width: "10%"
    },
    avatarDateName: {
        flexDirection: "row",
        bottom: 10
    },
    driverName: {
        fontWeight: "bold",
        fontSize: 20,
        top: 10,
        // left: 5
    },
    orderDate: {
        fontSize: 13,
        color: "gray",
        textTransform: 'capitalize',
        top: 40,
        right: 158,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    avatar: {
        width: "15%",
        top: 12,
        left: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    map: {
        height: "200"
    },
    originNameStreet: {
        left: 55,
        top: 65,
        fontSize: 18,
        width: "80%"
    },
    originHour: {
        left: 55,
        top: 70,
        fontSize: 13,
        color: "grey"
    },
    stopNameStreet: {
        left: 55,
        top: 105,
        fontSize: 18,
        width: "80%"
    },
    stopnHour: {
        left: 55,
        top: 108,
        fontSize: 13,
        color: "grey"
    },
    destinationNameStreet: {
        left: 55,
        top: 85,
        fontSize: 18,
        width: "80%"
    },
    destinationHour: {
        left: 55,
        top: 90,
        fontSize: 13,
        color: "grey"
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: "#45a8f29e",
        position: "absolute",
        top: 410,
        left: 47,
        borderRadius: 5,
    },
    line: {
        width: 3,
        height: 50,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 417,
        left: 50,
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
        top: 460,
        left: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    },
    circleStop: {
        width: 10,
        height: 10,
        backgroundColor: "#4d8beb",
        position: "absolute",
        top: 470,
        left: 48,
        borderRadius: 5,
    },
    lineStop: {
        width: 3,
        height: 105,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 420,
        left: 51,
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
        top: 520,
        left: 42,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
    rating: {
        fontSize: 18,
        fontWeight: '600',
        top: 5,
        left: 34,
        paddingBottom: 12,
    },
    ratingButton: {
        flexDirection: "row",
        width: 360,
        left: 15,
        color: "red",
        top: 140,
        padding: 10,
        backgroundColor: "#dfdfdf4d",
        borderRadius: 125,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    divider: {
        borderRadius: 10,
        height: 10,
        bottom: 25,
        backgroundColor: "#dfdfdf",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    plata: {
        top: 180,
    },
    titluPlata: {
        fontWeight: "bold",
        fontSize: 19,
    },
    paymentMethod: {
        marginLeft: "auto",
        fontSize: 18
    },
    textMetodaPlata: {
        fontSize: 18
    },
    metodaPlata: {
        flexDirection: "row",
        borderBottomWidth: 0.30,
        borderBottomColor: "#919191",
        paddingVertical: 1,
        shadowOpacity: 0.19,
        top: 15,
    },
    tarif: {
        flexDirection: "row",
        top: 30,
    },
    titluTarif: {
        fontSize: 18
    },
    pret: {
        marginLeft: "auto",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles;

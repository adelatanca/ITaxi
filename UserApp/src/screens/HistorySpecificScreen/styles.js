import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "white",
        height: "100%",
        // backgroundColor: 'rgba(0,0,0,0.7)',
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
        width: "100%",
        flexDirection: "row",
        //  justifyContent: 'space-between',
        bottom: 10
    },
    driverName: {
        width: "90%",
        fontWeight: "bold",
        fontSize: 18,
        top: 10,
        // left: 5
    },
    orderDate: {
        flexDirection: "column",
        width: "45%",
        height: 20,
        fontSize: 13,
        color: "gray",
        textTransform: 'capitalize',
        top: 40,
        right: 347,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    avatar: {
        right: 220,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.34,
    },
    map: {
        height: "200",
    },
    originNameStreet: {
        left: 55,
        top: 30,
        fontSize: 18,
        width: "80%"
    },
    originHour: {
        left: 55,
        top: 35,
        fontSize: 13,
        color: "grey"
    },
    stopNameStreet: {
        left: 55,
        top: 70,
        fontSize: 18,
        width: "80%"
    },
    stopHour: {
        left: 55,
        top: 75,
        fontSize: 13,
        color: "grey"
    },
    destinationNameStreet: {
        left: 55,
        top: 50,
        fontSize: 18,
        width: "80%"
    },
    destinationHour: {
        left: 55,
        top: 55,
        fontSize: 13,
        color: "grey"
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: "#45a8f29e",
        position: "absolute",
        top: 390,
        left: 47,
        borderRadius: 5,
    },
    line: {
        width: 3,
        height: 50,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 400,
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
        top: 445,
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
        top: 450,
        left: 48,
        borderRadius: 5,
    },
    lineStop: {
        width: 3,
        height: 105,
        backgroundColor: "#8b87938c",
        position: "absolute",
        top: 400,
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
        top: 500,
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
        top: 110,
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
        top: 160,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        top: 350,
        left: 10,
    },
    modalText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    buttonClose: {
        top: -40,
        left: 130,
    },
    buttonSendRating: {
        top: 80,
        color: "#45a8f2"
    },
    buttonSendText: {
        color: "#45a8f2",
        fontSize: 19,
        fontWeight: '600'
    },
    modalView: {
        margin: 20,
        width: 330,
        height: 250,
        bottom: -10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    ratingContainer: {
        top: 15,
    },
    textStyle: {
        // top: 30,
    },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 10,
        height: 300,
    },
    backButton: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        top: 10,
        left: Dimensions.get('window').width - 420,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
    currentPositionButton: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        bottom: 20,
        left: Dimensions.get('window').width - 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 3.84,
    },
    editButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 65,
        left: Dimensions.get('window').width - 60,
    },
    locationPin: {
        left: 5,
        top: 28,
    },
    confirm: {
        top: 10,
        left: 110,
        fontWeight: "bold",
        fontSize: 22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    confirmButton: {
        position: "absolute",
        backgroundColor: "#45a8f2",
        padding: 10,
        width: 400,
        top: 130,
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.65,
        shadowRadius: 3.84,
    },
    street: {
        width: "80%",
        flex: 1,
        left: 35,
        top: 6,
        fontSize: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
    }

});

export default styles;

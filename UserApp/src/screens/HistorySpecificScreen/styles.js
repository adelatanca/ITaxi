import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#2b80ff",
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    avatarDateName: {
        flexDirection: "row"
    },
    driverName: {
        fontWeight: "bold",
        fontSize: 20,
        top: 10,
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
    }
});

export default styles;

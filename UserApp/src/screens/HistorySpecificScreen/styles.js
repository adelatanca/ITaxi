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
    orderYear: {
        fontSize: 13,
        color: "gray",
        textTransform: 'capitalize'
    },
    avatar: {
        width: "15%"
    }
});

export default styles;

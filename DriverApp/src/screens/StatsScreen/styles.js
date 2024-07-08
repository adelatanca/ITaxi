import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white"
    },
    tabBar: {
        backgroundColor: '#45a8f2',
        borderRadius: 15,
        top: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        marginRight: 10,
        marginLeft: 10
    }
});

export default styles;

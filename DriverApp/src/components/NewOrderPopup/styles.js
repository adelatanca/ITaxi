import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#00000099',
  },
  popupContainer: {
    backgroundColor: '#188ee980',
    borderRadius: 10,
    height: 350,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 4,
  },
  username: {
    color: 'lightgrey',
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userBg: {
    backgroundColor: '#008bff',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  declineButton: {
    backgroundColor: '#188ee980',
    padding: 20,
    borderRadius: 50,
    width: 100,
    bottom: 10,
    right: 5,
    fontWeight: "bold",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.65,
    shadowRadius: 4,
  },
  declineText: {
    color: 'white',
    fontWeight: 'bold',
  },
  info: {
    padding: 10,
    bottom: 20,
    width: '90%'
  },
  phone: {
    color: 'white',
    top: -4,
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  pornire: {

    color: 'white',
    fontSize: 18,
    //top: 15,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  destinatie: {

    color: 'white',
    fontSize: 18,
    // top: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  oprire: {

    color: 'white',
    fontSize: 18,
    // top: 17,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  line: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 1,
    marginBottom: 20
  },
});

export default styles;

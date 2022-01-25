import {StyleSheet} from 'react-native';

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
    backgroundColor: '#45a8f2',
    borderRadius: 10,
    height: 350,
    alignItems: 'center',
    justifyContent: 'space-around',
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
    backgroundColor: '#45a8f2',
    padding: 20,
    borderRadius: 50,
    width: 100,
    bottom: 10,
    right: 5,
    alignItems: 'center',
  },
  declineText: {
    color: 'white',
    fontWeight: 'bold',
  },
  info: {
    padding: 12,
    bottom: 70,
  },
  phone: {
    color: 'white',
    top: 5,
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  pornire: {
    color: 'white',
    fontSize: 18,
    top: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  destinatie: {
    color: 'white',
    fontSize: 18,
    top: 30,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default styles;

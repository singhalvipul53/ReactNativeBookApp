import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    color: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    marginBottom: 10,
  },
  bottomText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 3,
  },
  pointContainer: {
    flexDirection: 'row',
    backgroundColor: '#fc7f03',
    marginTop: 20,
    height: 40,
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconcontainer: {
    backgroundColor: '#575451',
    borderRadius: 100,
    padding: 5,
  },
  point: {
    fontSize: 12,
  },
  bottomContainer: {
    backgroundColor: '#575451',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    height: 50,
    borderRadius: 10,
  },
  bottomContainerView: {
    flexDirection: 'row',
  },
  bottomContainerText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
});

export default styles;

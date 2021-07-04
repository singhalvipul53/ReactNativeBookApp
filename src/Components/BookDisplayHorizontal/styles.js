import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertext: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerAnchor: {
    textDecorationLine: 'underline',
    color: '#595555',
  },
  image: {
    width: 150,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  viewcontainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default styles;

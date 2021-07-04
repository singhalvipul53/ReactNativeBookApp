import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    flex: 1,
  },
  tabnavigation: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  activeTab: {
    flex: 3,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginRight: 15,
  },
  inactiveTab: {
    flex: 2,
    marginTop: 8,
    marginRight: 15,
    color: '#595555',
  },
  image: {
    width: 100,
    height: 170,
    borderRadius: 10,
    marginRight: 15,
  },
  textname: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  textauthor: {
    marginTop: 8,
    color: '#595555',
  },
  viewcontainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dramaView: {
    borderRadius: 10,
    backgroundColor: '#8f90b8',
    marginRight: 5,
    padding: 5,
  },
  dramaText: {
    color: '#076382',
  },
  romanceView: {
    borderRadius: 10,
    backgroundColor: '#b88f8f',
    marginRight: 5,
    padding: 5,
  },
  romanceText: {
    color: '#c92a3a',
  },
  adventureView: {
    borderRadius: 10,
    backgroundColor: '#8fb89f',
    marginRight: 5,
    padding: 5,
  },
  adventureText: {
    color: '#078249',
  },
});

export default styles;

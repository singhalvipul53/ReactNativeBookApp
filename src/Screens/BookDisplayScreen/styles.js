import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#b15cb8',
    height: '100%',
    position: 'relative',
    // flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 170,
    height: 220,
    borderRadius: 10,
  },
  nameText: {
    marginVertical: 10,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 18,
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent: 'space-evenly',
    backgroundColor: '#6f3c75',
    padding: 10,
    borderRadius: 10,
  },
  innerratingContainer: {
    paddingRight: 30,
    alignItems: 'center',
    borderRightColor: '#a79ba8',
    borderRightWidth: 1,
  },
  upperText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  lowerText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.5,
  },
  descriptionContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#150a1a',
    // height: '100%',
    padding: 10,
    paddingBottom: 30,
  },
  descriptionText: {
    marginLeft: 40,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  descriptionPara: {
    color: 'white',
    marginLeft: 40,
    opacity: 0.5,
    marginTop: 10,
    lineHeight: 20,
  },
  bookbutton: {
    marginHorizontal: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    backgroundColor: '#150a1a',
  },
  bookmarkContainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#968f89',
    marginRight: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ff6f00',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default styles;

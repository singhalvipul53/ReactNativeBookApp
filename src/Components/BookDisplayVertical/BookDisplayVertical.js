import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import bookdata from '../../data/bookdata';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {changeBook} from '../../Redux/features/homeSlice';
const BookDisplayVertical = ({navigation}) => {
  const dispatch = useDispatch();
  const onPress = item => {
    dispatch(changeBook(item));
    navigation.navigate('Book');
  };
  return (
    <View style={styles.root}>
      <View style={styles.tabnavigation}>
        <Text style={styles.activeTab}>Best Seller</Text>
        <Text style={styles.inactiveTab}>The Latest</Text>
        <Text style={styles.inactiveTab}>Coming Soon</Text>
      </View>
      {bookdata.map((item, index) => (
        <View key={index + 1} style={{flexDirection: 'row', marginBottom: 10}}>
          <Pressable onPress={() => onPress(item)}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
          <View style={{flex: 2}}>
            <Text style={styles.textname}>{item.name}</Text>
            <Text style={styles.textauthor}>{item.author}</Text>
            <View style={styles.viewcontainer}>
              <View style={styles.viewcontainer}>
                <Iconicons name="time-outline" size={17} color="#575451" />
                <Text style={{color: '#575451'}}>{item.time}</Text>
              </View>
              <View style={[styles.viewcontainer, {marginLeft: 10}]}>
                <AntDesign name="file1" size={17} color="#575451" />
                <Text style={{color: '#575451'}}>{item.percent}</Text>
              </View>
            </View>
            <View style={styles.viewcontainer}>
              <View style={styles.dramaView}>
                <Text style={styles.dramaText}>Drama</Text>
              </View>
              <View style={styles.romanceView}>
                <Text style={styles.romanceText}>Romance</Text>
              </View>
              <View style={styles.adventureView}>
                <Text style={styles.adventureText}>Adventure</Text>
              </View>
            </View>
          </View>
          <Pressable
            onPress={() => console.warn('Pressed item at index ' + index)}>
            <Feather name="bookmark" size={25} color="#575451" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default BookDisplayVertical;

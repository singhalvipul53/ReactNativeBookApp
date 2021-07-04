import React from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../data/bookdata';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {changeBook} from '../../Redux/features/homeSlice';
const BookDisplayHorizontal = ({navigation}) => {
  const dispatch = useDispatch();
  const onPress = item => {
    dispatch(changeBook(item));
    navigation.navigate('Book');
  };
  return (
    <View>
      <View style={styles.root}>
        <Text style={styles.headertext}>My Book</Text>
        <Text style={styles.headerAnchor}>see more</Text>
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <Pressable onPress={() => onPress(item)}>
              <Image style={styles.image} source={{uri: item.image}} />
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
            </Pressable>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BookDisplayHorizontal;

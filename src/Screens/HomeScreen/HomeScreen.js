import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import HomePageHeader from '../../Components/HomePageHeader/HomePageHeader';
import BookDisplayHorizontal from '../../Components/BookDisplayHorizontal/BookDisplayHorizontal';
import BookDisplayVertical from '../../Components/BookDisplayVertical/BookDisplayVertical';
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.root}>
      {/* Header */}
      <HomePageHeader />

      {/* Book Display in Horizontal ScrollBar  */}
      <BookDisplayHorizontal navigation={navigation} />

      {/* Best Selling book Vertical scroll  */}
      <BookDisplayVertical navigation={navigation} />
    </ScrollView>
  );
};

export default HomeScreen;

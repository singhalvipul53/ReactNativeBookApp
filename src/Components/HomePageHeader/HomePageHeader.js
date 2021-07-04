import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Iconicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const HomePageHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={styles.bottomText}>Vipul Singhal</Text>
        </View>
        <View style={styles.pointContainer}>
          <View style={styles.iconcontainer}>
            <Entypo name="500px" size={17} color="#fff" />
          </View>
          <Text style={{color: '#fff'}}>
            240 <Text style={styles.point}>point</Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerView}>
          <Iconicons name="md-card-outline" size={20} color="#fff" />
          <Text style={styles.bottomContainerText}>Claim</Text>
        </View>
        <View style={styles.bottomContainerView}>
          <Foundation name="target-two" size={20} color="#fff" />
          <Text style={styles.bottomContainerText}>Get Point</Text>
        </View>
        <View style={styles.bottomContainerView}>
          <Entypo name="credit-card" size={20} color="#fff" />
          <Text style={styles.bottomContainerText}>My Card</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePageHeader;

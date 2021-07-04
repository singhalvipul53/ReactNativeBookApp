import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {selectBook} from '../../Redux/features/homeSlice';
import {useSelector} from 'react-redux';
import styles from './styles';
const BookDisplay = () => {
  const images = useSelector(selectBook);
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: images.image,
          }}
        />
        <Text style={styles.nameText}>{images.name}</Text>
        <Text style={styles.authorText}>{images.author}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.innerratingContainer}>
          <Text style={styles.upperText}>{images.rating}</Text>
          <Text style={styles.lowerText}>Rating</Text>
        </View>
        <View style={styles.innerratingContainer}>
          <Text style={styles.upperText}>{images.pages}</Text>
          <Text style={styles.lowerText}>Number of Page</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.upperText}>{images.language}</Text>
          <Text style={styles.lowerText}>Language</Text>
        </View>
      </View>
      <View style={styles.bookbutton}>
        <Pressable style={styles.bookmarkContainer}>
          <Feather name="bookmark" size={25} color="#575451" />
        </Pressable>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Start Reading</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.descriptionContainer} indicatorStyle={'white'}>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.descriptionPara}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc,
        </Text>
      </ScrollView>
    </View>
  );
};

export default BookDisplay;

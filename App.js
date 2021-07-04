/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import BookDisplay from './src/Screens/BookDisplayScreen/BookDisplay';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Book"
          component={BookDisplay}
          options={{
            title: 'Detail Book',
            headerStyle: {
              backgroundColor: '#b15cb8',
              elevation: 0, //to remove faint line in header
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

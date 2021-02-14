/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import UserScreen from './src/UserScreen';

const Stack = createStackNavigator();

const userData = {
  userIdx: 100,
  userName: 'jihyun',
  userFirstName: 'park',
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{userData}}
          />
          <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

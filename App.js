/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
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

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: '#a4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'purple',
  },
};

const userHeaderOptions = {
  title: 'User Screen',
  headerStyle: {
    backgroundColor: 'pink',
  },
  headerTintColor: 'red',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'purple',
  },
};

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={commonHeaderOptions}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{userData}}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            // options={userHeaderOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

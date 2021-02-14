/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    const {route, navigation} = this.props;
    const {userData} = route.params;
    return (
      <View style={styles.component}>
        <Text>HomeScreen Screen</Text>
        <Button
          title="go to UserScreen"
          onPress={() => {
            navigation.navigate('User', userData);
          }}
        />
        <Button
          title="Change the title"
          onPress={() => {
            navigation.setOptions({
              title: 'changed',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

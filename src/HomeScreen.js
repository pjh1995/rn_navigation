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
    const {userData} = this.props.route.params;
    console.log(this.props.route);
    console.log(userData);
    return (
      <View style={styles.component}>
        <Text>HomeScreen Screen</Text>
        <Button
          title="go to UserScreen"
          onPress={() => {
            this.props.navigation.navigate('User', userData);
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

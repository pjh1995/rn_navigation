/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class UserScreen extends Component {
  render() {
    return (
      <View style={styles.component}>
        <Text>User Screen</Text>
        <Button
          title="go to HomeScreen"
          onPress={() => {
            this.props.navigation.navigate('Home');
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

export default UserScreen;

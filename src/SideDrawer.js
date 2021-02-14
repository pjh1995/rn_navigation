/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import Logo from './Logo';
import {CommonActions} from '@react-navigation/native';

class SideDrawer extends Component {
  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  render() {
    return (
      <View style={styles.component}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Logo />
            </View>
            <Text style={styles.sectionHeading}>Section 1</Text>
            <View style={styles.navSection}>
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text
                style={styles.navItem}
                onPress={() => {
                  alert('Help');
                }}>
                Help
              </Text>
              <Text
                style={styles.navItem}
                onPress={() => {
                  alert('Info');
                }}>
                Info
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.copyright}>
          <Text>Copyright @ jhpark, 2021.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  copyright: {
    paddingLeft: 10,
    paddingBottom: 20,
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSection: {
    backgroundColor: '#04b6ff',
  },
  navItem: {
    padding: 10,
    color: '#fff',
  },
});

export default SideDrawer;

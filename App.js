/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import HomeScreen from './src/stackComponents/HomeScreen';
// import UserScreen from './src/stackComponents/UserScreen';
import HomeScreen from './src/drawerComponents/HomeScreen';
import UserScreen from './src/drawerComponents/UserScreen';
import SideDrawer from './src/SideDrawer';
import Logo from './src/Logo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const homeHeaderRight = () => (
  <Button title="Info" onPress={() => alert('sdsd')} color="pink" />
);

const homeHeaderOptions = {
  title: 'Home Screen',
  headerTitle: <Logo />,
  headerRight: homeHeaderRight,
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
  headerBackTitle: 'Back',
};

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Help" onPress={() => alert('Help')} icon={Logo} />
//       <DrawerItem label="Info" onPress={() => alert('Info Info')} />
//     </DrawerContentScrollView>
//   );
// };

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: 'pink',
            width: 200,
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue',
          }}
          drawerContent={(props) => <SideDrawer {...props} />}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: Logo,
            }}
          />
          <Drawer.Screen name="User" component={UserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={commonHeaderOptions}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       initialParams={{userData}}
      //       options={homeHeaderOptions}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       options={userHeaderOptions}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;

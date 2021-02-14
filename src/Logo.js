/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Image} from 'react-native';
import homeIcon from './assets/icons/home.png';

const Logo = () => {
  return <Image style={{width: 30, height: 30}} source={homeIcon} />;
};

export default Logo;

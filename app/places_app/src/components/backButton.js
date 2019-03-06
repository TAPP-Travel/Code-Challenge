import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { withNavigation } from 'react-navigation';
const backIcon = require('../../assets/goIcon.png');

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ marginTop: verticalScale(40), marginLeft: scale(20) }}
    onPress={() => navigation.navigate('HomeScreen')}>
    <Image style={{ transform: [{ rotate: '180deg' }] }} source={backIcon} />
  </TouchableOpacity>
);
export default withNavigation(BackButton);

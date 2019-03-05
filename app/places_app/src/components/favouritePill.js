import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const heart = require('../../assets/heartIcon.png');

const StarsPill = ({ rating }) => (
  <View
    style={{
      backgroundColor: '#FFF',
      width: scale(50),
      height: verticalScale(20),
      borderRadius: moderateScale(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(8),
    }}>
    <Image source={heart} />
    <Text style={{ color: '#1313AF' }}>{rating}</Text>
  </View>
);
export default StarsPill;

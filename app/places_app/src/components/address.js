import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const townPinIcon = require('../../assets/townPinIcon.png');

const Address = ({ vicinity, address }) => (
  <View style={{ marginVertical: verticalScale(10), marginHorizontal: scale(22) }}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={townPinIcon} />
      <Text style={{ fontWeight: 'bold', fontSize: moderateScale(10) }}>{vicinity}</Text>
    </View>
    <Text style={{ fontWeight: '400', fontSize: moderateScale(10) }}>{address}</Text>
  </View>
);
export default Address;

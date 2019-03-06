import React from 'react';
import { Image, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const heart = require('../../assets/heartIcon.png');

const StarsPill = ({
  rating,
  backgroundColor,
  height,
  width,
  borderRadius,
  fontsize,
  heartSize,
}) => (
  <View
    style={{
      backgroundColor: backgroundColor ? backgroundColor : '#FFF',
      width: width ? width : scale(50),
      height: height ? height : verticalScale(20),
      borderRadius: borderRadius ? borderRadius : moderateScale(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: width ? scale(10) : scale(8),
    }}>
    <Image source={heart} style={{ width: heartSize ? heartSize : scale(12) }} />
    <Text
      style={{
        color: '#1313AF',
        fontSize: fontsize ? fontsize : null,
        marginLeft: !fontsize ? moderateScale(5) : moderateScale(2),
      }}>
      {rating}
    </Text>
  </View>
);
export default StarsPill;

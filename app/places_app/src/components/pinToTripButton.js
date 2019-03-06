import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const check = require('../../assets/checkmarkIcon.png');

const PinToTripButton = ({ pinToTrip, isPinned }) => (
  <TouchableOpacity onPress={pinToTrip}>
    <View
      style={{
        backgroundColor: !isPinned ? '#1313AF' : '#00FF1C',
        alignItems: 'center',
        justifyContent: 'center',
        height: verticalScale(30),
        width: scale(300),
        borderRadius: moderateScale(30),
        marginVertical: verticalScale(10),
        marginHorizontal: scale(20),
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {isPinned && <Image source={check} />}
        <Text style={{ color: isPinned ? '#000' : '#FFF' }}>
          {isPinned ? 'Pinned to Trip' : 'Pin to Trip'}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default PinToTripButton;

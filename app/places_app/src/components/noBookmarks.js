import React from 'react';
import { Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const NoBookmarks = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ color: '#808080', fontSize: moderateScale(18) }}>This trip is empty</Text>
    <Text style={{ color: '#ACB7B9', fontSize: moderateScale(12) }}>
      Click the blue plus to pin a place
    </Text>
  </View>
);

export default NoBookmarks;

import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import BackButton from './backButton';
import StarsPill from './favouritePill';
const FooterBackround = require('../../assets/tripBackground.png');
const addButtonImage = require('../../assets/addBookmarkButton.png');

const DetailHeader = ({ backround, image, rating, city, name }) => (
  <ImageBackground
    source={{ uri: image }}
    style={{
      height: verticalScale(400),
      width: '100%',
      justifyContent: 'space-between',
      zIndex: -1,
    }}>
    <BackButton />
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: scale(10),
        marginBottom: verticalScale(10),
      }}>
      <View>
        <Text style={[styles.textColor, { fontWeight: 'bold', fontSize: moderateScale(13) }]}>
          {city}
        </Text>
        <Text style={[styles.textColor, { fontWeight: '400', fontSize: moderateScale(18) }]}>
          {name}
        </Text>
      </View>
      <StarsPill rating={rating} />
    </View>
  </ImageBackground>
);

export default DetailHeader;

const styles = StyleSheet.create({
  textColor: {
    color: '#FFF',
  },
});

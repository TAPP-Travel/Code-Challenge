import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const FooterBackround = require('../../assets/tripBackground.png');
const addButtonImage = require('../../assets/addBookmarkButton.png');

const HomeFooter = () => (
  <ImageBackground
    source={FooterBackround}
    style={{
      height: verticalScale(300),
      width: '100%',
      justifyContent: 'flex-end',
      zIndex: -1,
    }}>
    <View style={{ marginBottom: verticalScale(20), marginLeft: scale(20) }}>
      <Text style={[styles.textColor]}>Exploring Louisville BBQ</Text>
      <Text style={[styles.textColor]}>Louisville, Kentucky</Text>
    </View>
  </ImageBackground>
);

export default HomeFooter;

const styles = StyleSheet.create({
  textColor: {
    color: '#FFF',
  },
});

import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const HeaderBackround = require('../../assets/weatherHeader.png');
const addButtonImage = require('../../assets/addBookmarkButton.png');

const WelcomeHeader = ({ timeOfDay, weather, goToSearch }) => (
  <ImageBackground
    source={HeaderBackround}
    style={{
      height: verticalScale(100),
      width: '100%',
      justifyContent: 'center',
      zIndex: -1,
    }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{`Good ${timeOfDay}`}</Text>
        <Text>{`Today is ${weather}`}</Text>
      </View>
      <Image source={addButtonImage} />
    </View>
  </ImageBackground>
);

export default WelcomeHeader;

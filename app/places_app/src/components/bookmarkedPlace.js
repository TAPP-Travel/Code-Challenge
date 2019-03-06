import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import googleApiKey from '../../config';
import StarsPill from './favouritePill';
class BookMarkedPlace extends React.Component {
  render() {
    const photoReference = this.props.details.photos
      ? this.props.details.photos[0].photo_reference
      : null;
    //const { lat, lng } = this.props.context.selectedPlace.details.geometry.location;
    const { rating, formatted_address, vicinity } = this.props.details;

    console.log(photoReference);
    const detailImage = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleApiKey}`;
    const { main_text, secondary_text } = this.props.data.structured_formatting;
    const secondaryTextArray = secondary_text.split(',');
    const backIcon = require('../../assets/goIcon.png');
    return (
      <View
        style={{
          alignItems: 'center',
          marginBottom: verticalScale(70),
        }}>
        <ImageBackground
          style={{
            justifyContent: 'flex-end',
            width: scale(225),
            height: verticalScale(200),
            marginHorizontal: scale(10),
          }}
          imageStyle={{ borderRadius: moderateScale(15) }}
          source={{ uri: detailImage }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: scale(20),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={[styles.textColor, { fontWeight: 'bold', fontSize: moderateScale(12) }]}>
                  {`${secondaryTextArray[1]}, ${secondaryTextArray[2]}`}
                </Text>
                <StarsPill
                  backgroundColor={'#51BCF9'}
                  width={scale(40)}
                  height={verticalScale(12)}
                  borderRadius={moderateScale(10)}
                  rating={rating}
                  fontsize={moderateScale(10)}
                  heartSize={scale(10)}
                />
              </View>
              <Text style={[styles.textColor, { fontWeight: '400', fontSize: moderateScale(18) }]}>
                {main_text}
              </Text>
            </View>
            <TouchableOpacity
              onPress={this.props.goToDetail}
              style={{ marginLeft: moderateScale(10) }}>
              <Image source={backIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default BookMarkedPlace;

const styles = StyleSheet.create({
  textColor: {
    color: '#FFF',
  },
});

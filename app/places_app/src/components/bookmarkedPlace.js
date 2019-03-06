import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import googleApiKey from '../../config';

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
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginBottom: verticalScale(70),
        }}>
        <ImageBackground
          style={{
            justifyContent: 'flex-end',
            width: scale(200),
            height: verticalScale(200),
          }}
          imageStyle={{ borderRadius: moderateScale(15) }}
          source={{ uri: detailImage }}>
          <Text style={{ color: '#FFF' }}>place</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default BookMarkedPlace;

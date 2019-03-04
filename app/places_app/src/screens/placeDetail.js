import React from 'react';
import { Image, Text, View } from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';
import { scale, verticalScale } from 'react-native-size-matters';
import googleApiKey from '../../config';
import MapContextToProps from '../context/mapContextToProps';

class PlaceDetail extends React.Component {
  goToDetail = async selectedPlace => {
    const { selectPlace } = this.props.context;
    await selectPlace(selectedPlace);
    this.props.navigation.navigate('PlaceDetail');
  };
  render() {
    const photoReference = this.props.context.selectedPlace.details.photos[0].photo_reference;
    console.log(photoReference);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: verticalScale(20),
        }}>
        <Text>Detail</Text>
        <Image
          style={{ height: verticalScale(100), width: scale(100) }}
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleApiKey}`,
          }}
        />
        <GoogleStaticMap
          latitude={'32.064171'}
          longitude={'34.7748068'}
          zoom={14}
          size={{ width: '100%', height: verticalScale(100) }}
          apiKey={googleApiKey}
        />
      </View>
    );
  }
}

export default MapContextToProps(PlaceDetail);

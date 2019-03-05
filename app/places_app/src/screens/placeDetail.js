import React from 'react';
import { StatusBar, View } from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';
import { scale, verticalScale } from 'react-native-size-matters';
import googleApiKey from '../../config';
import DetailHeader from '../components/detailHeader';
import MapContextToProps from '../context/mapContextToProps';
class PlaceDetail extends React.Component {
  goToDetail = async selectedPlace => {
    const { selectPlace } = this.props.context;
    await selectPlace(selectedPlace);
    this.props.navigation.navigate('PlaceDetail');
  };
  render() {
    const photoReference = this.props.context.selectedPlace.details.photos[0].photo_reference;
    const { lat, lng } = this.props.context.selectedPlace.details.geometry.location;
    const {  rating } = this.props.context.selectedPlace.details;
    console.log(photoReference);
    const detailImage = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${googleApiKey}`;
    const {
      main_text,
      secondary_text,
    } = this.props.context.selectedPlace.data.structured_formatting;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <StatusBar hidden />
        <DetailHeader image={detailImage} name={main_text} city={secondary_text} rating={rating} />
        <View>
          <GoogleStaticMap
            latitude={lat.toString()}
            longitude={lng.toString()}
            zoom={14}
            size={{ width: Math.round(scale(300)), height: Math.round(verticalScale(200)) }}
            apiKey={googleApiKey}
          />
        </View>
      </View>
    );
  }
}

export default MapContextToProps(PlaceDetail);

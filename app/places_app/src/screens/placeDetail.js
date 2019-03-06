import React from 'react';
import { StatusBar, View } from 'react-native';
import GoogleStaticMap from 'react-native-google-static-map';
import { scale, verticalScale } from 'react-native-size-matters';
import googleApiKey from '../../config';
import Address from '../components/address';
import DetailHeader from '../components/detailHeader';
import PinToTripButton from '../components/pinToTripButton';
import MapContextToProps from '../context/mapContextToProps';
class PlaceDetail extends React.Component {
  state = {
    isPinned: false,
  };

  pinToTrip = () => {
    const { selectedPlace } = this.props.context;
    this.setState({ isPinned: true });
    this.props.context.addBookmark({
      data: selectedPlace.data,
      details: selectedPlace.details,
      pinned: true,
    });
  };
  render() {
    const photoReference = this.props.context.selectedPlace.details.photos
      ? this.props.context.selectedPlace.details.photos[0].photo_reference
      : null;
    const { lat, lng } = this.props.context.selectedPlace.details.geometry.location;
    const { rating, formatted_address, vicinity } = this.props.context.selectedPlace.details;

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
        <View
          style={{
            backgroundColor: '#FFF',
            width: '100%',
            marginTop: scale(-25),
            borderTopEndRadius: verticalScale(25),
            borderTopStartRadius: verticalScale(25),
          }}>
          <PinToTripButton isPinned={this.state.isPinned} pinToTrip={this.pinToTrip} />
          <Address address={formatted_address} vicinity={vicinity} />
        </View>
        <GoogleStaticMap
          latitude={lat.toString()}
          longitude={lng.toString()}
          zoom={14}
          size={{ width: Math.round(scale(300)), height: Math.round(verticalScale(175)) }}
          apiKey={googleApiKey}
        />
      </View>
    );
  }
}

export default MapContextToProps(PlaceDetail);

import React from 'react';
import { Text, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import MapContextToProps from '../context/mapContextToProps';

class PlaceDetail extends React.Component {
  goToDetail = async selectedPlace => {
    const { selectPlace } = this.props.context;
    await selectPlace(selectedPlace);
    this.props.navigation.navigate('PlaceDetail');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: verticalScale(20),
        }}>
        <Text>Detail</Text>
      </View>
    );
  }
}

export default MapContextToProps(PlaceDetail);

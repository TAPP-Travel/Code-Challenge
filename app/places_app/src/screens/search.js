import React from 'react';
import { View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import GoogleAutoComplete from '../components/autocompleteGoogle';
import MapContextToProps from '../context/mapContextToProps';

class Search extends React.Component {
  goToDetail = async selectedPlace => {
    console.log('detail');
    const { selectPlace } = this.props.context;
    await selectPlace(selectedPlace);
    this.props.navigation.navigate('PlaceDetail');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: verticalScale(30),
        }}>
        <GoogleAutoComplete goToDetail={this.goToDetail} />
      </View>
    );
  }
}

export default MapContextToProps(Search);

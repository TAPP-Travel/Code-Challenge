import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import googleAPIKey from '../../config';

const GooglePlacesInput = ({ goToDetail }) => {
  return (
    <GooglePlacesAutocomplete
      ref={instance => {
        this.GooglePlacesRef = instance;
      }}
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus
      styles={{
        textInputContainer: {
          width: '100%',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        console.log(data, details);
        goToDetail({ data, details });
      }}
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: googleAPIKey,
        language: 'en', // language of the results
      }}
      styles={{
        textInputContainer: {
          width: '100%',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food',
        componentRestrictions: { locality: 'Louisville' },
      }}
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      //renderLeftButton={() => <Image source={require('path/custom/left-icon')} />}
      renderRightButton={() => (
        <TouchableOpacity
          onPress={() => this.GooglePlacesRef.setAddressText('')}
          style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>cancel</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default GooglePlacesInput;

const styles = {
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: '#C9C9CE',
    height: 44,
    borderTopColor: '#7e7e7e',
    borderBottomColor: '#b5b5b5',

    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 28,
    borderRadius: 5,
    paddingTop: 4.5,
    paddingBottom: 4.5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 7.5,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  powered: {},
  listView: {},
  row: {
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
  androidLoader: {
    marginRight: -15,
  },
};

import React from 'react';
import { Text, View } from 'react-native';
import GoogleAutoComplete from '../components/autocompleteGoogle';

class Search extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <GoogleAutoComplete />
      </View>
    );
  }
}

export default Search;

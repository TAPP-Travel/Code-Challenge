import React from 'react';
import {View, Text, Button} from 'react-native';
import DisplayAnImage from '../components/placePhoto';

//Eventually this would have the logic to pull in the place detail and photo from what is selected from
//the list on the Search page
export default ({history}) => (
  <View style={{ flex: 1, backgroundColor: '#0f5e9b'}}>
    <DisplayAnImage />

    
    <Button title="Back" onPress={() => history.push("/search")} />
  </View>
);


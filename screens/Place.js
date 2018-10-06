import React from 'react';
import {View, Text, Button} from 'react-native';
import DisplayAnImage from '../components/placePhoto';
import Card from '../components/card';


export default ({history}) => (
  <View style={{ flex: 1, backgroundColor: '#0f5e9b'}}>
    <DisplayAnImage />

    
    <Button title="Back" onPress={() => history.push("/search")} />
  </View>
);


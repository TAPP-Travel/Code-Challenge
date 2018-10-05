import React from 'react';
import {View, Text, Button} from 'react-native';


export default ({history}) => (
  <View>
    <Text> This is the Place page</Text>
    <Button title="Back" onPress={() => history.push("/search")} />
  </View>
);


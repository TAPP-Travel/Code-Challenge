import React from 'react';
import {View, Text, Button} from 'react-native';
import Autocomplete from '../components/autocomplete';

export default ({ history }) => (
  <View style={{ flex: 1, padding: 20, justifyContent: "space-between" }}>
        <Text
            style={{
                fontSize: 18,
                textAlign: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        > 
        Search
        </Text>

    <Autocomplete/>

    <Button title="Back" onPress={() => history.push("/")} />
    <Button title="Add New Place" onPress={() => history.push("/place")} />
  </View>
);


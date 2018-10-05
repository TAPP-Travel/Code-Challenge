import React from 'react';
import {View, Text, Button} from 'react-native';


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
      {"\n"}  Bookmarks
      </Text>
    <Button title="Add New Place" onPress={() => history.push("/search")} 
    />
  </View>
);


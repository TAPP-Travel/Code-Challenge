import React from 'react';
import {View, Text, Button} from 'react-native';


export default ({ history }) => (
  <View>
    <Text>Bookmark 1</Text>
    <Text>Bookmark 2</Text>
    <Text> This is the Bookmarks page</Text>
    <Button title="Add New Place" onPress={() => history.push("/search")} />
  </View>
);


import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

//This page is where the bookmarks would have shown up
//They would have pulled data from state and output them
//Into a few class components
//Currently only routing to the Place and Search page works

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

    <Button title="Add New Place" onPress={() => history.push("/search")}/>
    <Button title="Place" onPress={() => history.push("/place")} />

  </View>
);

class Leaders extends Component{
  render(){
    return<View>
      <Text>Hello</Text>
    </View>
  }
};


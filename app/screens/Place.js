import React from 'react';
import {View, Text} from 'react-native';

import DisplayAnImage from '../components/placePhoto';
import { Card, Button } from "react-native-elements";

//Eventually this would have the logic to pull in the place detail and photo from what is selected from
//the list on the Search page
export default ({ history }) => (
  <View style={{ flex: 1 }}>
    <DisplayAnImage style={{ flex: 1 }} />

    <Card title="LACMA" 
    containerStyle={{ flex: 1, 
             paddingBottom: 100 ,
             borderTopLeftRadius: 10,
             borderTopRightRadius: 10
             
             } }>
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <View/>
      <View/>
      <Button
        backgroundColor="rgba(4,4,206,1)"
        buttonStyle={{
          borderRadius: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 100
        }}
        title="Bookmark" onPress={() => history.push("/")}
      />
    </Card>

  </View>
);


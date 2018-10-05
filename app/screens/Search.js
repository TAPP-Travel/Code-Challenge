import React from 'react';
import {View, Text, Button} from 'react-native';


export default ({ history }) => (
    <View>
        <Text> This is Search page</Text>
        <Button title="Back" onPress={() => history.push("/")} />
        <Button title="Add New Place" onPress={() => history.push("/place")} />
    </View>
);


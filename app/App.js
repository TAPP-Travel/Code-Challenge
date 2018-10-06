import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Bookmarks from './screens/Bookmarks';
import Search from './screens/Search';
import Place from './screens/Place';

//Creating the App component which will be used to display the imported component
export default class App extends React.Component {
  render() {
    return <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Bookmarks} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/place" component={Place} />
          </Switch>
        </View>
      </NativeRouter>;
  }
}
//styling for page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

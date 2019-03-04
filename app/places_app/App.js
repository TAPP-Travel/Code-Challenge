import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppProvider from './src/context/appProvider';
import Navigation from './src/navigation/stacknav';

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Navigation />
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

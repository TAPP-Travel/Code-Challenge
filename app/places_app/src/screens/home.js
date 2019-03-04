import React from 'react';
import { View } from 'react-native';
import NoBookmarks from '../components/noBookmarks';
import WelcomeHeader from '../components/welcomeHeader';
import mapContextToProps from '../context/mapContextToProps';
class HomeScreen extends React.Component {
  render() {
    const { bookmarks } = this.props.context;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <WelcomeHeader timeOfDay="Afternoon" weather="72° and Sunny" />
        {!bookmarks.length && <NoBookmarks />}
      </View>
    );
  }
}

export default mapContextToProps(HomeScreen);

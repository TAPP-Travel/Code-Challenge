import React from 'react';
import { Text, View } from 'react-native';
import HomeFooter from '../components/homeFooter';
import NoBookmarks from '../components/noBookmarks';
import WelcomeHeader from '../components/welcomeHeader';
import mapContextToProps from '../context/mapContextToProps';
class HomeScreen extends React.Component {
  render() {
    const { bookmarks } = this.props.context;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FDFDFD',
        }}>
        <WelcomeHeader timeOfDay="Afternoon" weather="72° and Sunny" />
        {!bookmarks.length ? <NoBookmarks /> : <Text>carrasol</Text>}
        <HomeFooter />
      </View>
    );
  }
}

export default mapContextToProps(HomeScreen);

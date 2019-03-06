import React from 'react';
import { FlatList, View } from 'react-native';
import BookMarkedPlace from '../components/bookmarkedPlace';
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
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
          horizontal
          ListEmptyComponent={<NoBookmarks />}
          data={this.props.context.bookmarks}
          renderItem={({ item }) => (
            <BookMarkedPlace item={item} data={item.data} details={item.details} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <HomeFooter />
      </View>
    );
  }
}

export default mapContextToProps(HomeScreen);

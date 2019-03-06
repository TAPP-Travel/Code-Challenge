import React from 'react';
import { AsyncStorage } from 'react-native';
import Context from './context';

class AppProvider extends React.Component {
  state = {
    bookmarks: [],
    selectedPlace: {},
  };
  //checks for stored book marks
  async componentDidMount() {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    if (bookmarks) this.setState({ bookmarks: JSON.parse(bookmarks) });
    AsyncStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks));
    // AsyncStorage.removeItem('bookmarks');
  }

  selectPlace = async selectedPlace => await this.setState({ selectedPlace });

  //adds and persists bookmarks
  addBookmark = async place => {
    const bookmarks = this.state.bookmarks.concat(place);
    await this.setState({ bookmarks });
    AsyncStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks));
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, selectPlace: this.selectPlace, addBookmark: this.addBookmark }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
